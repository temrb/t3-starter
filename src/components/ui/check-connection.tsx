import React from 'react';
import Logo from './logo';
import { WifiOff } from 'lucide-react';

const CheckConnection = () => {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<div className='flex flex-row items-center space-x-4'>
				<Logo size='md' />
				<WifiOff size={30} />
			</div>
			<div className='flex flex-col items-center justify-center pt-2'>
				<h1 className='text-center text-3xl font-semibold'>
					You are offline.
				</h1>
				<p className='text-center text-sm tracking-wide'>
					Please check your internet connection
				</p>
			</div>
		</div>
	);
};

export default CheckConnection;
