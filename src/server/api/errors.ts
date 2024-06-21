import { errorCode } from './trpc';

function throwUnauthorized(message: string) {
	throw new errorCode({
		code: 'UNAUTHORIZED',
		message: message,
	});
}

function throwConflict(message: string) {
	throw new errorCode({
		code: 'CONFLICT',
		message: message,
	});
}

function throwForbidden(errors: any) {
	throw new errorCode({
		code: 'FORBIDDEN',
		message: errors,
	});
}

function throwNotFound(errors: any) {
	throw new errorCode({
		code: 'NOT_FOUND',
		message: errors,
	});
}

function throwInternalError(message: string) {
	throw new errorCode({
		code: 'INTERNAL_SERVER_ERROR',
		message: message,
	});
}

export {
	throwConflict,
	throwForbidden,
	throwInternalError,
	throwNotFound,
	throwUnauthorized,
};
