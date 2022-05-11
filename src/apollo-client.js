import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://mini-project-99.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": 
            "0rGrjvmTKoKutEl2pzXhaFxPbKtIoeyPbdHBRm0zL6OoNgwZI9WxkRGi6uEy9b2O",
    }
});

export default client;