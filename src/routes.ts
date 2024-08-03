import { Route } from '@/types/route';

const routes: Route[] = [
	{
		path: '/dashboard',
		type: 'user',
		name: 'Dashboard',
		description: 'This is the dashboard',
		ancillary: true,
	},
	{
		path: '/feature1',
		type: 'user',
		name: 'Feature 1',
		description: 'This is the first feature',
	},
	{
		path: '/settings',
		type: 'user',
		name: 'Settings',
		description: 'This is the settings page',
		ancillary: true,
	},
	{
		path: '/',
		type: 'public',
		name: 'Landing',
		description: 'This is the landing page',
	},
	{
		path: '/get-started',
		type: 'public',
		name: 'Get Started',
		description: 'This is the get started page',
	},
];

export default routes;
