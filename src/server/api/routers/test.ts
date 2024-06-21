import { throwConflict } from '../errors';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const testRouter = createTRPCRouter({
	hello: protectedProcedure.query(async () => 'testing 123'),
	hi: publicProcedure.query(throwConflict('This is a conflict error')),
});
