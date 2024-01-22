import React from 'react';

interface LogoProps {
	size: 'xs' | 'sm' | 'md' | 'lg';
}

const Logo = (props: LogoProps) => {
	const { size } = props;

	return (
		// TODO - this ugly
		<span
			className={`relative ${
				size === 'xs'
					? 'size-6'
					: size === 'sm'
						? 'size-8'
						: size === 'md'
							? 'size-10'
							: size === 'lg'
								? 'size-12'
								: 'size-8'
			}
		rounded-full bg-gradient-to-b from-primary to-destructive shadow-lg dark:shadow-none`}
		>
			<svg
				className='svg-icon absolute inset-0'
				viewBox='-10 -10 120 120'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M120 25 C 90 40, 70 70, 50 50 C 30 30, 10 70, -30 70' // Flipped path coordinates
					strokeWidth='13'
					fill='transparent'
				/>
			</svg>
		</span>
	);
};

export default Logo;
