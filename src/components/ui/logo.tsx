import { cn } from '@/lib/utils/tw.utils';

const SIZES = {
	xs: 'size-6',
	sm: 'size-8',
	md: 'size-10',
	lg: 'size-12',
};

const Logo = ({ size = 'sm' }: { size?: 'xs' | 'sm' | 'md' | 'lg' }) => {
	const baseClasses =
		'relative rounded-full bg-muted-foreground shadow-lg dark:shadow-none';
	const sizeClass = SIZES[size] || SIZES.sm;

	return (
		<span className={cn(baseClasses, sizeClass)}>
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
