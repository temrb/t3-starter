import routes from '@/routes';
import { NextRequest, NextResponse } from 'next/server';
import { getUserViaToken } from './utils';

export default async function middleware(req: NextRequest) {
	const session = await getUserViaToken(req);
	const { pathname, searchParams } = req.nextUrl;

	const route = routes.find((r) => r.path === pathname);

	if (!route) {
		return NextResponse.next();
	}

	if (session) {
		// User is signed in
		if (
			route.type === 'public' &&
			(pathname === '/' || pathname === '/get-started')
		) {
			return NextResponse.redirect(new URL('/dashboard', req.url));
		}
		return NextResponse.next();
	} else {
		// User is not signed in
		if (route.type === 'user') {
			const redirectUrl = new URL('/get-started', req.url);
			redirectUrl.searchParams.set('redirectTo', pathname);
			return NextResponse.redirect(redirectUrl);
		}
		return NextResponse.next();
	}
}
