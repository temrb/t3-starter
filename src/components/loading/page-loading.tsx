import React from 'react';
import LoadingSpinner from './loading-spinner';

const PageLoading = () => {
	return (
		<div
			className='flex h-[calc(100dvh_-_12rem)] w-full
         items-center justify-center lg:h-[calc(100dvh_-_11rem)]'
		>
			<LoadingSpinner size='size-10 lg:size-14' />
		</div>
	);
};

export default PageLoading;
