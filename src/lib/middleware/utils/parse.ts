import { NextRequest } from 'next/server';

export const parse = (req: NextRequest) => {
	let domain = req.headers.get('host') as string;
	domain = domain.replace('www.', '').toLowerCase();
	let path = req.nextUrl.pathname;

	const searchParams = req.nextUrl.searchParams.toString();
	const searchParamsString =
		searchParams.length > 0 ? `?${searchParams}` : '';
	const fullPath = `${path}${searchParamsString}`;

	return { domain, path, fullPath, searchParamsString };
};
