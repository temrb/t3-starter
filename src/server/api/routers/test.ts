import { createTRPCRouter, publicProcedure } from '../trpc';

export const testRouter = createTRPCRouter({
	hello: publicProcedure.query(() => {
		return {
			message: 'hello world (public) query',
		};
	}),
});
