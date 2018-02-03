import { ApolloError } from './apollo-error';

export function formatError(err: any) {
    if (err.originalError.data) {
        err.data = err.originalError.data
    }

    return err;
}