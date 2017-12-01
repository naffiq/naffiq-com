import gql from 'graphql-tag';

export default (context, apolloClient) => (
    apolloClient.query({
        query: gql`
            query getUser {
                user {
                    id,
                    email
                }
            }
        `
    }).then(({data}) => {
        return {userSession: data};
    }).catch(() => {
        return {userSession: {}};
    })
)