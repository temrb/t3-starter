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

			const providerProfileFields = {
				google: 'picture',
				linkedin: 'avatar_url', // Adjust if necessary for LinkedIn
			};

			const provider =
				account?.provider as keyof typeof providerProfileFields;
			if (provider && ['google', 'linkedin'].includes(provider)) {
				const userExists = await prisma.user.findUnique({
					where: {
						email: user.email,
					},
					select: {
						id: true,
						name: true,
						image: true,
					},
				});

				if (userExists && profile) {
					const profilePic =
						profile[
							providerProfileFields[
								provider
							] as keyof typeof profile
						];
					const dataToUpdate: Record<string, any> = {};

					if (!userExists.name) {
						dataToUpdate.name =
							profile.name || (profile as any).login; // Using `login` as a fallback if `name` doesn't exist
					}

					if (!userExists.image) {
						dataToUpdate.image = profilePic;
					}

					if (Object.keys(dataToUpdate).length > 0) {
						await prisma.user.update({
							where: { email: user.email },
							data: dataToUpdate,
						});
					}
				}
			}

			return true;
		},
	},

	debug: process.env.NODE_ENV === 'development',
};
