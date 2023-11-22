import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const profileRouter = createTRPCRouter({
	test: protectedProcedure.query(() => {
		return {
			profile: {
				id: '1',
				name: 'test',
			},
		};
	}),
});
