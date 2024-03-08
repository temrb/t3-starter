import React from 'react';
import LoadingSpinner from './loading-spinner';

const PageLoading = () => {
	return (
		<div
			className='flex h-full w-full
         items-center justify-center'
		>
			<LoadingSpinner size={44} />
		</div>
	);
};

export default PageLoading;
