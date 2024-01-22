'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import superjson from 'superjson'; // Added superjson import

import { trpc } from './client';

const getBaseUrl = () => {
	if (typeof window !== 'undefined') return ''; // browser should use relative URL
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use Vercel URL
	return `http://localhost:${process.env.PORT ?? 3000}`; // Dev SSR should use localhost
};

export default function TRPCProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [queryClient] = useState(() => new QueryClient({}));
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				loggerLink({
					enabled: (opts) =>
						process.env.NODE_ENV === 'development' ||
						(opts.direction === 'down' &&
							opts.result instanceof Error),
				}),
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
				}),
			],
			transformer: superjson, // Add the superjson transformer
		}),
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{/* <ReactQueryDevtools /> */}
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	);
}
