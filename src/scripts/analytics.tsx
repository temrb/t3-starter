import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export default function Analytics() {
	return (
		process.env.NODE_ENV === 'production' && (
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
				<Script id='google-tag-manager' strategy='afterInteractive'>
					{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTAG}');
        `}
				</Script>

				{/* vercel analytics */}
				<VercelAnalytics />
			</>
		)
	);
}
