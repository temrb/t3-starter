import React, { ReactNode } from 'react';

const BottomBar = (props: { children: ReactNode; mobileOnly: boolean }) => {
	return (
		<div
			className={`fixed bottom-16 left-0 z-30 flex h-16
			w-full items-center justify-center border-t-[1px] border-foreground/20 bg-background
			px-4 lg:sticky lg:bottom-0 ${props.mobileOnly && 'lg:hidden'}`}
		>
			{props.children}
		</div>
	);
};

export default BottomBar;
