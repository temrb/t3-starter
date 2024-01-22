import { createTRPCRouter, protectedProcedure } from '../trpc';

export const testRouter = createTRPCRouter({
    hello: protectedProcedure.query(async () => 'testing 123'),
});
