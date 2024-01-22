import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth/options';
import { ISODateString } from 'next-auth';

export interface Session {
	user: {
		id: string;
		email: string;
		name: string;
		image?: string;
	};
	expires: ISODateString;
}

export const getSession = async () => {
	return getServerSession(authOptions) as Promise<Session>;
};
