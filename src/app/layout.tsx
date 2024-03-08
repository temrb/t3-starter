import React, { ReactNode } from 'react';
import '../styles/globals.css';
import Providers from './providers';
import { Analytics } from '@/scripts';
import localFont from 'next/font/local';

const hubot = localFont({
	src: '../../public/assets/fonts/Hubot-Sans.woff2',
	variable: '--font-hubot',
	display: 'swap',
	// weight: '',
});

export const metadata = {
	title: 'T3 Starter',
	description: 'T3 Starter',
	meta: {
		viewport: 'width=device-width, initial-scale=1',
		charset: 'utf-8',
	},
};

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	if (typeof window !== 'undefined' && window?.navigator.onLine) {
		if (window?.navigator.onLine) {
			console.log('online');
		} else {
			console.log('offline');
		}
	}
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<Analytics />
			</head>
			<body
				className={`${hubot.className} h-[calc(100dvh)] w-full bg-background text-foreground antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
