import Script from 'next/script';

export default function Ads() {
	return (
		process.env.NODE_ENV === 'production' && (
			<>
				{/* google adsense */}
				<Script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3746482380637235'
					crossOrigin='anonymous'
					strategy='lazyOnload'
				/>
			</>
		)
	);
}
