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
import LinkedInLogo from '../../../assets/logos/linkedin.logo';
import Logo from '@/components/logo';

const Page = () => {
	const [loading, setLoading] = useState(false);
	return (
		<div className='h-full w-full'>
			<div className='flex h-full w-full items-center justify-center p-2'>
				<Card
					className='mx-auto w-full max-w-md transform transition-shadow duration-500
				ease-in-out hover:shadow-2xl'
				>
					<CardHeader
						className='flex items-center justify-start
				 space-y-2 border-b-[1px] border-b-foreground/10'
					>
						<Logo size='lg' />
						<CardTitle className='flex flex-row items-center justify-between space-x-2'>
							<span className='text-2xl font-semibold tracking-tight'>
								Get started
							</span>
						</CardTitle>
						<CardDescription>
							T3 Stack
						</CardDescription>
						<div className='rounded-full bg-muted px-3 py-1 font-mono text-xs tracking-tighter ring-2 ring-destructive'>
							Starter Kit 🚀
						</div>
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
						<Button
							disabled={loading}
							className='h-14 w-full'
							variant='outline'
							onClick={() => {
								setLoading(true);
								signIn('linkedin').then(() =>
									setLoading(false),
								);
							}}
						>
							<span className='flex w-full flex-row items-center justify-center space-x-2'>
								<LinkedInLogo width={24} />
								<p className='text-sm font-normal tracking-wide'>
									Continue with LinkedIn
								</p>
							</span>
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Page;
