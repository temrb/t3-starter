import { db } from '@/server/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { DefaultSession, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession['user'];
	}
}

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
					emailVerified: profile.email_verified && Date.now(),
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
					emailVerified: profile.email_verified && Date.now(),
				};
			},
		}),
	],
	adapter: PrismaAdapter(db),
	session: {
		strategy: 'jwt',
		// maxAge: 15 * 24 * 60 * 60, // 15 days
	},
	cookies: {
		sessionToken: {
			name: `${
				process.env.NODE_ENV === 'production' ? '__Secure-' : ''
			}next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: 'lax',
				path: '/',
				domain:
					process.env.NODE_ENV === 'production'
						? '.t3starter.vercel.app'
						: undefined,
				secure: process.env.NODE_ENV === 'production',
			},
		},
	},
	pages: {
		signIn: '/get-started',
		error: '/get-started',
	},
	callbacks: {
		signIn: async ({ user, account, profile }) => {
			if (process.env.NODE_ENV === 'development') {
				console.log('THE STUFF 🚨🚨🚨🚨', { user, account, profile });
			}

			if (!user.email) {
				return false;
			}
			if (account?.provider === 'google') {
				const userExists = await db.user.findUnique({
					where: { email: user.email },
					select: {
						id: true,
						name: true,
						email: true,
						image: true,
					},
				});
				if (userExists && !userExists.name) {
					await db.user.update({
						where: { email: user.email },
						data: {
							name: profile?.name,
							// @ts-ignore - TODO: fix this
							image: profile?.picture,
							email: profile?.email,
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
				token.user = user;
				token.sub = user.id;
				token.email = user.email;
				token.name = user.name;
			}

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
				// @ts-ignore
				...(token || session).user,
			};
			return session;
		},
	},
	debug: process.env.NODE_ENV === 'development',
};
