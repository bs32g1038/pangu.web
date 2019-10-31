import gql from 'graphql-tag';

export default gql`
    query Topics($page: Int!, $limit: Int!, $tab: String!, $nodeId: String!, $userId: String!) {
        pagedTopics(page: $page, limit: $limit, filter: { tab: $tab, nodeId: $nodeId, userId: $userId }) {
            rows {
                id
                title
                top
                locked
                visitCount
                replyCount
                collectCount
                type
                createdAt
                node {
                    id
                    name
                }
                user {
                    id
                    username
                    account
                    avatar
                }
                lastReplyUser {
                    id
                    username
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
        users {
            id
            username
            account
            avatar
        }
    }
`;
