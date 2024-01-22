'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import LoadingSpinner from '@/components/loading/loading-spinner';

const TRPCQuery = () => {
	const trpcQuery = api.test.hello.useQuery();

	if (trpcQuery.isLoading) {
		return <LoadingSpinner size='size-6' />;
	}

	if (trpcQuery.error) {
		return <div>error: {trpcQuery.error.message}</div>;
	}

	if (trpcQuery.isSuccess) {
		return <div>{trpcQuery.data}</div>;
	}
};

const Page = () => {
	return (
		<div className='flex items-center space-x-2'>
			<Button
				variant='destructive'
				onClick={() => {
					signOut();
				}}
			>
				Sign out
			</Button>
			<div className='flex flex-col'>
				<p>trpc query:</p>
				<TRPCQuery />
			</div>
		</div>
	);
};

export default Page;
