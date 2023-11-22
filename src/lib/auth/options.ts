import { Role } from '.prisma/client';
import { db } from '@/server/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			role: string;
			credits: number;
		} & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		credits: number;
		role: Role;
	}
}

export const authOptions: NextAuthOptions = {
	callbacks: {
		signIn: async ({ user, account, profile }) => {
			if (
				!user.email
				// || (await isBlacklistedEmail(user.email))
			) {
				return false;
			}
			if (account?.provider === 'google') {
				const userExists = await db.user.findUnique({
					where: { email: user.email },
					select: { name: true },
					// cacheStrategy: { swr: 60, ttl: 60 },
				});
				// if the user already exists via email,
				// update the user with their name and image from Google
				if (userExists && !userExists.name) {
					await db.user.update({
						where: { email: user.email },
						data: {
							name: profile?.name,
							// @ts-ignore - this is a bug in the types, `picture` is a valid on the `Profile` type
							image: profile?.picture,
						},
					});
				}
			}
			return true;
		},
		jwt: async ({ token }) => {
			const db_user = await db.user.findUnique({
				where: {
					id: token.sub,
				},
				select: {
					id: true,
					role: true,
					name: true,
					email: true,
					image: true,
					credits: true,
				},
				// cacheStrategy: {  //acceleratedDb
				// 	swr: 60,
				// 	ttl: 60,
				// },
			});
			if (db_user) {
				token.id = db_user.id;
				token.role = db_user.role;
				token.name = db_user.name;
				token.email = db_user.email;
				token.image = db_user.image;
				token.credits = db_user.credits;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.role = token.role;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
				session.user.credits = token.credits;
			}
			return session;
		},
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
						? '.t3-nextjs-starter.vercel.app'
						: undefined,
				secure: process.env.NODE_ENV === 'production',
			},
		},
	},
	pages: {
		signIn: '/hello',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
					role: profile.role ?? 'USER',
				};
			},
		}),
	],
	adapter: PrismaAdapter(db),
	session: { strategy: 'jwt' },
};

export const getServerAuthSession = () => getServerSession(authOptions);
