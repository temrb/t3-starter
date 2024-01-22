import { useState, useEffect } from 'react';

export default function useInternetConnection() {
	const [isOnline, setIsOnline] = useState(true); // Default to true or false based on your preference

	useEffect(() => {
		// Set the initial state based on the client's navigator status
		setIsOnline(navigator.onLine);

		const goOnline = () => setIsOnline(true);
		const goOffline = () => setIsOnline(false);

		// Add event listeners
		window.addEventListener('online', goOnline);
		window.addEventListener('offline', goOffline);

		// Cleanup function
		return () => {
			window.removeEventListener('online', goOnline);
			window.removeEventListener('offline', goOffline);
		};
	}, []);

	return isOnline;
}
