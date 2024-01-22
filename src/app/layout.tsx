import React, { ReactNode } from 'react';
import '../styles/globals.css';
import Providers from './providers';
import { Analytics } from '@/scripts';
import localFont from 'next/font/local';

const myFont = localFont({
	src: '../styles/Unageo[wght,ital].ttf',
	display: 'swap',
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
				className={`${myFont.className} h-[calc(100dvh)] w-full bg-background text-foreground antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
