'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const Page = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<div>
				<Button
					variant='destructive'
					onClick={() => {
						signOut({ callbackUrl: '/' });
					}}
				>
					Sign out
				</Button>
				<div className='flex flex-col'>
					<p>private trpc query:</p>
				</div>
			</div>
		</div>
	);
};

export default Page;
