import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { getServerSession } from 'next-auth';
import SessionProvider from './SessionProvider';
import TRPCProvider from '@/app/api/_trpc/trpc-provider';

const Providers = async ({ children }: { children: ReactNode }) => {
	const session = await getServerSession();
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<TRPCProvider>
				<SessionProvider session={session}>{children}</SessionProvider>
			</TRPCProvider>
		</ThemeProvider>
	);
};

export default Providers;
