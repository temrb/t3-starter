'use client';

import Image from 'next/image';
import { ModeToggle } from '@/components/ui/mode-toggle';
import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
const { useSession } = require('next-auth/react');

export default function Home() {
	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ModeToggle />
			{session && (
				<h1 className='text-xl font-semibold'>
					user: {session.user.name}
				</h1>
			)}
			<Button
				variant={'ghost'}
				className='text-lg  font-semibold'
				onClick={() => {
					setLoading(true);
					signOut().then(() => setLoading(false));
				}}
				disabled={loading}
			>
				<span className='flex flex-row items-center space-x-2'>
					<p className='text-sm lg:text-lg'>Sign Out</p>
					<LogOut className='h-4 w-4 lg:h-5 lg:w-5' />
				</span>
			</Button>
		</main>
	);
}
