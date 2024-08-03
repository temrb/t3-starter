interface Route {
	path: string;
	type: 'public' | 'user';
	name: string;
	description: string;
	soon?: true;
	ancillary?: true;
}

export { Route };
