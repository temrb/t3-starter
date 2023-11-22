// import { PrismaClient } from '@prisma/client/edge'; // Import from '@prisma/client/edge' for accelerated PrismaClient.
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import 'server-only';

const createStandardPrismaClient = () => {
	return new PrismaClient({
		log:
			process.env.NODE_ENV === 'development'
				? ['query', 'error', 'warn']
				: ['error'],
	});
};

// Singleton pattern for creating an accelerated PrismaClient instance.
const createAcceleratedPrismaClient = () => {
	return new PrismaClient({
		log:
			process.env.NODE_ENV === 'development'
				? ['query', 'error', 'warn']
				: ['error'],
	}).$extends(withAccelerate());
};

type PrismaClientAccelerated = ReturnType<typeof createAcceleratedPrismaClient>;

const globalForPrisma = globalThis as unknown as {
	standardPrisma: PrismaClient | undefined;
	acceleratedPrisma: PrismaClientAccelerated | undefined;
};

const db = globalForPrisma.standardPrisma ?? createStandardPrismaClient();
const acceleratedDb =
	globalForPrisma.acceleratedPrisma ?? createAcceleratedPrismaClient();

if (process.env.NODE_ENV !== 'production') {
	globalForPrisma.standardPrisma = db;
	globalForPrisma.acceleratedPrisma = acceleratedDb;
}

export { db, acceleratedDb };
