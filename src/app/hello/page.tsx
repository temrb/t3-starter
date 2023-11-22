'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import GoogleLogo from '../../../assets/logos/google.logo';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Logo from '@/components/logo';

const Page = () => {
	const [loading, setLoading] = useState(false);
	return (
		<div className='flex h-full w-full items-center justify-center p-2'>
			<div
				style={{
					width: '100dvh',
					minHeight: '100dvh',
					position: 'fixed',
					zIndex: -1,
					display: 'flex',
					justifyContent: 'center',
					padding: '120px 24px 160px 24px',
					pointerEvents: 'none',
				}}
			>
				<div
					className='radial-bg-light dark:radial-bg-dark'
					style={{
						position: 'absolute',
						zIndex: 2,
						width: '100%',
						height: '100%',
						top: 0,
					}}
				/>
				<div
					className='animated-gradient hidden lg:block'
					style={{
						zIndex: 3,
						width: '45%',
						height: '45%',
						position: 'fixed',
						top: '50%', // Position the top edge of the element at the center of the screen
						left: '50%', // Position the left edge of the element at the center of the screen
						transform: 'translate(-50%, -50%)', // Shift the element back by half its width and height to center it
						filter: 'blur(100px) saturate(450%)',
						opacity: 0.25,
					}}
				/>
			</div>
			<Card
				className='mx-auto w-full max-w-md transform bg-card transition-shadow duration-500
				ease-in-out hover:shadow-2xl'
			>
				<CardHeader
					className='flex items-center justify-start
				 space-y-2 border-b-[1px] border-b-foreground/10'
				>
					<Logo />
					<CardTitle className='flex flex-row items-center justify-between space-x-2'>
						<span className='text-2xl font-semibold tracking-tight'>
							Get started
						</span>
					</CardTitle>
					<CardDescription>T3 Next.js Starter Kit 🚀</CardDescription>
				</CardHeader>
				<CardContent className='mx-auto max-w-sm space-y-3 pt-4'>
					<Button
						disabled={loading}
						className='h-14 w-full'
						variant='outline'
						onClick={() => {
							setLoading(true);
							signIn('google').then(() => setLoading(false));
						}}
					>
						<span className='flex w-full flex-row items-center justify-center space-x-2'>
							<GoogleLogo width={24} />
							<p className='text-sm font-normal tracking-wide'>
								Continue with Google
							</p>
						</span>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default Page;
