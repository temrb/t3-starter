import Link from 'next/link';

const Page = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<div className='flex flex-col space-y-4'>
				<Link href='/get-started' className='underline'>
					<p>Get Started</p>
				</Link>
				<h1>
					Don't forget to run `npx prisma db push` to initialize db
				</h1>
			</div>
		</div>
	);
};

export default Page;
