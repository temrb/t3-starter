import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const config = {
	authorized: ['/', '/settings'],
	unauthorized: ['/hello'],
	all: ['/terms/:path*'],
};

export default async function middleware(req: NextRequest) {
	const { pathname, origin } = req.nextUrl;

	// Function to match paths with wildcards
	const matchPath = (path: string) => {
		const regex = new RegExp('^' + path.replace(/:\w+\*/g, '.*') + '$');
		return regex.test(pathname);
	};

	if (config.all.some(matchPath)) {
		// Handle additional custom logic for all routes as needed
		return NextResponse.next();
	} else if (config.authorized.some(matchPath)) {
		const session = await getToken({
			req,
			secret: process.env.NEXTAUTH_SECRET,
		});

		if (!session) {
			return NextResponse.redirect(new URL('/hello', origin));
		}
	} else if (config.unauthorized.some(matchPath)) {
		const session = await getToken({
			req,
			secret: process.env.NEXTAUTH_SECRET,
		});

		if (session) {
			return NextResponse.redirect(new URL('/', origin));
		}
	}

	return NextResponse.next();
}
