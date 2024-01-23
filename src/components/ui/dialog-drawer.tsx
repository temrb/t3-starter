'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { Drawer } from 'vaul';
import { cn } from '@/lib/tw.utils';
import * as Dialog from '@radix-ui/react-dialog';
import { useMediaQuery } from '@/hooks';

interface DialogDrawerProps {
	children: React.ReactNode;
	className?: string;
	showModal?: boolean;
	setShowModal?: Dispatch<SetStateAction<boolean>>;
	onClose?: () => void;
	desktopOnly?: boolean;
	preventDefaultClose?: boolean;
}

export const DialogDrawer: React.FC<DialogDrawerProps> = ({
	children,
	className,
	showModal = true,
	setShowModal,
	onClose,
	desktopOnly,
	preventDefaultClose,
}) => {
	const router = useRouter();

	const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
		if (preventDefaultClose && !dragged) return;
		onClose && onClose();
		if (setShowModal) {
			setShowModal(false);
		} else {
			router.back();
		}
	};

	const { isMobile } = useMediaQuery();

	if (isMobile && !desktopOnly) {
		const mobileDrawerClasses = cn(
			'fixed bottom-0 left-0 right-0 z-30 mt-24 rounded-t-sm border-[1px] border-border bg-background p-4 text-foreground',
			className,
		);

		return (
			<Drawer.Root
				open={setShowModal ? showModal : true}
				onOpenChange={(open) => {
					if (!open) {
						closeModal({ dragged: true });
					}
				}}
			>
				<Drawer.Overlay className='fixed inset-0 z-30 bg-background/15 backdrop-blur' />
				<Drawer.Portal>
					<Drawer.Content className={mobileDrawerClasses}>
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

	const desktopDialogClasses = cn(
		'animate-scale-in fixed inset-0 z-30 m-auto max-h-fit w-full max-w-md overflow-hidden border-[1px] border-border bg-background p-4 shadow-xl md:rounded-2xl',
		className,
	);

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
					id='dialog-drawer'
					className='animate-fade-in fixed inset-0 z-30 bg-background/20 backdrop-blur-md'
				/>
				<Dialog.Content
					onOpenAutoFocus={(e) => e.preventDefault()}
					onCloseAutoFocus={(e) => e.preventDefault()}
					className={desktopDialogClasses}
				>
					{children}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export interface ModalData {
	content: React.ReactNode;
	classValue: string;
}
