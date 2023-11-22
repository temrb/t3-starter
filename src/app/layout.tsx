/** @format */

import React, { ReactNode } from 'react';
import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Providers from './providers';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

export const metadata = {
	title: 'Cool Site',
	description: 'Lorems if the ipsumist',
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
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				{process.env.NODE_ENV === 'production' && (
					<>
						{/* clarity */}
						<Script
							type='text/javascript'
							id='ms_clarity'
							dangerouslySetInnerHTML={{
								__html: `
		(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
	})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
					`,
							}}
						/>

						{/* google analytics */}
						<Script
							id='google-tag-manager'
							strategy='afterInteractive'
						>
							{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTAG}');
        `}
						</Script>
						<Analytics />
					</>
				)}
			</head>
			<body
				className={`${poppins.className} bg-background text-foreground h-[calc(100dvh)] w-full antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
