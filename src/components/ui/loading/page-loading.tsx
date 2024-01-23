import React from 'react';
import LoadingSpinner from './loading-spinner';

const PageLoading = () => {
	return (
		<div
			className='size size flex h-[calc(100dvh)] w-full
         items-center justify-center'
		>
			<LoadingSpinner size={44} />
		</div>
	);
};

export default PageLoading;
