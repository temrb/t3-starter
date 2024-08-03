import TestQuery from '@/components/test-query';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='flex h-full w-full flex-col'>
			<TestQuery />
			{children}
		</div>
	);
};

export default Layout;
