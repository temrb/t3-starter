import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import SessionProvider from './SessionProvider';
import TRPCProvider from '@/app/api/_trpc/trpc-provider';
import { getSession } from '@/lib/auth';

const Providers = async ({ children }: { children: ReactNode }) => {
	const session = await getSession();
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
