import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';

const query = gql`
    query Topics($page: Int!, $limit: Int!) {
        pagedTopics(page: $page, limit: $limit) {
            rows {
                id
                title
                top
                locked
                visitCount
                replyCount
                collectCount
                type
                node {
                    id
                    name
                }
                user {
                    id
                    account
                    avatar
                }
            }
            count
        }
        nodes {
            id
            name
            icon
        }
    }
`;

export default (apolloClient: ApolloClient<any>) =>
    apolloClient
        .query({
            query,
            variables: {
                page: 1,
                limit: 10,
            },
        })
        .then(({ data }) => {
            return { pagedTopics: data.pagedTopics, nodes: data.nodes };
        })
        .catch(err => {
            // Fail gracefully
            console.log(err);
            return { pagedTopics: [], nodes: [] };
        });
