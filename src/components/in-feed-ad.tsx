'use client';

import { Adsense } from '@ctrl/react-adsense';

const InFeedAd = () => {
	return (
		<Adsense
			client={`ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
			slot='7307801882'
			className='block w-full'
			layout='in-article'
			layoutKey='-ef+6k-30-ac+ty'
			format='fluid'
		/>
	);
};

export default InFeedAd;
