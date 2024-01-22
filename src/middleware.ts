import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const routeConfig = {
	authorized: ['/', '/settings', '/profile/:path*'],
	unauthorized: ['/get-started', '/hello'],
	all: ['/terms/:path*', '/privacy/:path*', '/studio/:path*'],
};

export default async function middleware(req: NextRequest) {
	const { pathname, origin } = req.nextUrl;

	const matchPath = (path: string) => {
		const regex = new RegExp('^' + path.replace(/:\w+\*/g, '.*') + '$');
		return regex.test(pathname);
	};

	try {
		if (routeConfig.all.some(matchPath)) {
			return NextResponse.next();
		} else if (routeConfig.authorized.some(matchPath)) {
			const session = await getToken({
				req,
				secret: process.env.NEXTAUTH_SECRET,
			});

			if (!session) {
				return NextResponse.redirect(new URL('/get-started', origin));
			}
		} else if (routeConfig.unauthorized.some(matchPath)) {
			const session = await getToken({
				req,
				secret: process.env.NEXTAUTH_SECRET,
			});

			if (session) {
				return NextResponse.redirect(new URL('/', origin));
			}
		}
	} catch (error) {
		console.error('Error processing middleware:', error);
		// TODO error response.
		return NextResponse.error();
	}

	return NextResponse.next();
}
