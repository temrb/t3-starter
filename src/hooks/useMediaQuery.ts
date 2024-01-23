import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop' | null;

interface Dimensions {
	width: number;
	height: number;
}

export default function useMediaQuery() {
	const [device, setDevice] = useState<DeviceType>(null);
	const [dimensions, setDimensions] = useState<Dimensions | null>(null);

	useEffect(() => {
		const checkDevice = () => {
			const screenWidth = window.innerWidth;

			if (screenWidth <= 640) {
				setDevice('mobile');
			} else if (screenWidth > 640 && screenWidth <= 1024) {
				setDevice('tablet');
			} else {
				setDevice('desktop');
			}

			setDimensions({
				width: screenWidth,
				height: window.innerHeight,
			});
		};

		// Initial detection
		checkDevice();

		// Listener for window resize
		const handleResize = () => {
			checkDevice();
		};

		window.addEventListener('resize', handleResize);

		// Cleanup listener
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		device,
		width: dimensions?.width,
		height: dimensions?.height,
		isMobile: device === 'mobile',
		isTablet: device === 'tablet',
		isDesktop: device === 'desktop',
	};
}
