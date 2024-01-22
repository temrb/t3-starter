import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

export const metadata = {
	title: '👋 Get Started!',
	description:
		'Get started on Careerflo: Sign up for an account and unlock your journey to a seamless job search, resume building, and interview preparation.',
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <div className='h-full w-full'>{children}</div>;
};

export default Layout;
