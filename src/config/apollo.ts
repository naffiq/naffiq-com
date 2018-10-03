import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, Operation, NextLink } from "apollo-link";
import { InMemoryCache as Cache } from "apollo-cache-inmemory";

import authHelper from "../helpers/authHelper";

const URL = process.env.APOLLO_URL || "http://localhost:9001/graphql";

const AuthLink = new ApolloLink((operation: Operation, next: NextLink) => {
  const token = authHelper.getToken();
  operation.setContext((context: any) => ({
    ...context,
    credentials: "same-origin",
    headers: token
      ? {
          ...context.headers,
          authorization: `Bearer ${token}`
        }
      : context.headers
  }));

  return next(operation);
});

const link = ApolloLink.from([AuthLink, new HttpLink({ uri: URL })]);

export default new ApolloClient({
  link,
  cache: new Cache().restore({})
});
