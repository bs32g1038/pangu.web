import { ApolloClient } from 'apollo-client';

export default (apolloClient: ApolloClient<any>, queryGql: any, params = {}) =>
    apolloClient.query({ query: queryGql, variables: params });
