'use client';
import React from 'react';
import { cn } from '@/lib/tw.utils';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { Drawer } from 'vaul';
import { useMediaQuery } from '@/hooks';

export function DialogDrawer({
	children,
	className,
	showModal,
	setShowModal,
	onClose,
	desktopOnly,
	preventDefaultClose,
}: {
	children: React.ReactNode;
	className?: string;
	showModal?: boolean;
	setShowModal?: Dispatch<SetStateAction<boolean>>;
	onClose?: () => void;
	desktopOnly?: boolean;
	preventDefaultClose?: boolean;
}) {
	const router = useRouter();

	const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
		if (preventDefaultClose && !dragged) {
			return;
		}
		// fire onClose event if provided
		onClose && onClose();

		// if setShowModal is defined, use it to close modal
		if (setShowModal) {
			setShowModal(false);
			// else, this is intercepting route @modal
		} else {
			router.back();
		}
	};
	const { isMobile } = useMediaQuery();

	if (isMobile && !desktopOnly) {
		return (
			<Drawer.Root
				open={setShowModal ? showModal : true}
				onOpenChange={(open) => {
					if (!open) {
						closeModal({ dragged: true });
					}
				}}
			>
				<Drawer.Overlay className='fixed inset-0 z-30 bg-background/15 backdrop-blur' />{' '}
				{/* Ensure full height */}
				<Drawer.Portal>
					<Drawer.Content
						className={cn(
							'fixed bottom-0 left-0 right-0 z-30 mt-24 rounded-t-sm border-[1px] border-border bg-background p-4 text-foreground',
							className,
						)}
					>
						<div className='sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit'>
							<div className='my-3 h-1 w-12 rounded-full bg-foreground/50' />
						</div>

						{children}
					</Drawer.Content>
					<Drawer.Overlay />
				</Drawer.Portal>
			</Drawer.Root>
		);
	}
	return (
		<Dialog.Root
			open={setShowModal ? showModal : true}
			onOpenChange={(open) => {
				if (!open) {
					closeModal();
				}
			}}
		>
			<Dialog.Portal>
				<Dialog.Overlay
					// for detecting when there's an active opened modal
					id='dialog-drawer'
					className='animate-fade-in fixed inset-0 z-30 bg-background/20 backdrop-blur-md'
				/>
				<Dialog.Content
					onOpenAutoFocus={(e) => e.preventDefault()}
					onCloseAutoFocus={(e) => e.preventDefault()}
					className={cn(
						'animate-scale-in fixed inset-0 z-30 m-auto max-h-fit w-full max-w-md overflow-hidden border-[1px] border-border bg-background p-4 shadow-xl md:rounded-2xl',
						className,
					)}
				>
					{children}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export interface ModalData {
	content: React.ReactNode;
	classValue: string;
}
