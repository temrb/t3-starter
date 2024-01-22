import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import SessionProvider from './session-provider';
import TRPCProvider from '@/app/api/_trpc/trpc-provider';
import { getSession } from '@/lib/auth';
import UtilsProvider from './utils-provider';
import { Toaster } from '@/components/ui/sonner';

const Providers = async ({ children }: { children: ReactNode }) => {
	const session = await getSession();
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='light'
			enableSystem
			disableTransitionOnChange
		>
			<UtilsProvider>
				<TRPCProvider>
					<SessionProvider session={session}>{children}</SessionProvider>
				</TRPCProvider>
				<Toaster />
			</UtilsProvider>
		</ThemeProvider>
	);
};

export default Providers;
