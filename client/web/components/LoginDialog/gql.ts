import gql from 'graphql-tag';

export default gql`
    mutation UserLogin($email: String!, $password: String!) {
        userLogin(userLoginInput: { email: $email, password: $password }) {
            id
            account
            username
            avatar
        }
    }
`;
