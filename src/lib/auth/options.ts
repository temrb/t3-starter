import { db } from '@/server/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { DefaultSession, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';

declare module 'next-auth' {
	interface Session {
		user?: {
			id: string;
			email: string;
			name: string;
			image?: string;
		} & DefaultSession['user'];
	}
}

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			allowDangerousEmailAccountLinking: true,
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
				};
			},
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID as string,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
			authorization: {
				params: { scope: 'openid profile email' },
			},
			issuer: 'https://www.linkedin.com',
			jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
			allowDangerousEmailAccountLinking: true,
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
				};
			},
		}),
	],
	adapter: PrismaAdapter(db),
	session: {
		strategy: 'jwt',
	},
	cookies: {
		sessionToken: {
			name: `${VERCEL_DEPLOYMENT ? '__Secure-' : ''}next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: 'lax',
				path: '/',
				domain: VERCEL_DEPLOYMENT
					? `.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
					: undefined,
				secure: VERCEL_DEPLOYMENT,
			},
		},
	},
	pages: {
		// signIn: '/get-started',
		error: '/get-started',
	},
	callbacks: {
		signIn: async ({ user, account, profile }) => {
			if (process.env.NODE_ENV === 'development') {
				console.log(
					'⬇️⬇️⬇️ AUTH DEBUG ⬇️⬇️⬇️',
					{ user, account, profile },
					'⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️',
				);
			}

			if (!user.email) {
				return false;
			}

			if (account?.provider === 'google') {
				const userExists = await db.user.findUnique({
					where: {
						email: user.email,
					},
					select: {
						id: true,
						name: true,
						image: true,
					},
				});
				// if the user already exists via email,
				// update the user with their name and image from Google
				if (userExists && profile) {
					await db.user.update({
						where: { email: user.email },
						data: {
							...(userExists.name ? {} : { name: profile.name }),

							...(userExists.image
								? {}
								: {
										// @ts-expect-error
										// - this is a bug in the types, `picture` is a valid on the `Profile` type
										image: profile.picture,
									}),
						},
					});
				}
			}
			if (account?.provider === 'linkedin') {
				const userExists = await db.user.findUnique({
					where: { email: user.email },
					select: {
						id: true,
						name: true,
						image: true,
					},
				});
				// if the user already exists via email,
				// update the user with their name and image from Github
				if (userExists && profile) {
					await db.user.update({
						where: { email: user.email },
						data: {
							...(userExists.name
								? {}
								: // @ts-expect-error - this is a bug in the types, `login` is a valid on the `Profile` type
									{ name: profile.name || profile.login }),
							...(userExists.image
								? {}
								: {
										// @ts-expect-error
										// - this is a bug in the types, `picture` is a valid on the `Profile` type
										image: profile.avatar_url,
									}),
						},
					});
				}
			}

			return true;
		},
		jwt: async ({ token, account, user, trigger }) => {
			if (!token.email) {
				return {};
			}

			if (user) {
				// token.user = user;
				token.sub = user.id;
				token.email = user.email;
				token.name = user.name;
				token.picture = user.image;
			}

			// refresh the user's data if they update their name / email
			if (trigger === 'update') {
				const refreshedUser = await db.user.findUnique({
					where: { id: token.sub },
				});
				if (refreshedUser) {
					token.user = refreshedUser;
				} else {
					return {};
				}
			}
			return token;
		},
		session: async ({ session, token }) => {
			session.user = {
				id: token.sub,
				email: token.email,
				name: token.name,
				image: token.picture,
				// @ts-ignore
				...(token || session).user,
			};

			return session;
		},
	},
	debug: process.env.NODE_ENV === 'development',
};
