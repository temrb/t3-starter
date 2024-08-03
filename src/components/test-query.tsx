import { api } from '@/trpc/server';

const TestQuery = async () => {
	const hello = await api.test.hello.query();
	return (
		<div className='flex h-16 w-full flex-col items-center justify-center'>
			<p>hello: {hello.message}</p>
		</div>
	);
};

export default TestQuery;
