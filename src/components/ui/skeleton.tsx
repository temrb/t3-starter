import { cn } from '@/lib/utils/tw.utils';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'animate-pulse rounded-md bg-muted-foreground/40',
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
