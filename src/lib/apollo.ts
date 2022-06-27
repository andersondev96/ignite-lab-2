import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x6xob007yq01t24dqmfw6d/master',
  cache: new InMemoryCache()
})