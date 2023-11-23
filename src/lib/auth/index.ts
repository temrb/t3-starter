import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth/options';
import { ISODateString } from 'next-auth';

export interface Session {
	user: {
		email: string;
		id: string;
		name: string;
		image?: string;
		role: string;
		credits: number;
	};
	expires: ISODateString;
}

export const getSession = async () => {
	return getServerSession(authOptions) as Promise<Session>;
};
