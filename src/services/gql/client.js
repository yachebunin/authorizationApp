import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Observable } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { logOut, getRefreshToken, login } from "@/services/auth";

// Also works for the HTTP connection to the API in place of HttpLink
const link = createUploadLink({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT_HTTP,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("accessToken");

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const refreshLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions.code === "UNAUTHENTICATED") {
        return promiseToObservable(refreshToken(operation)).flatMap(() =>
          forward(operation)
        );
      }
    }
  }
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: refreshLink.concat(authLink.concat(link)),
  cache,
  connectToDevTools: true,
});

export default apolloClient;

const promiseToObservable = (promise) =>
  new Observable((subscriber) => {
    promise.then(
      (value) => {
        if (subscriber.closed) return;
        subscriber.next(value);
        subscriber.complete();
      },
      (err) => subscriber.error(err)
    );
    return subscriber;
  });

const refreshToken = (operation) => {
  return fetch(`${process.env.VUE_APP_REST_API_BASE}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: getRefreshToken(),
    }),
  })
    .then((o) => o.json())
    .then((refreshJson) => {
      if (refreshJson.status >= 400) throw new Error(refreshJson.reason);

      login(refreshJson);

      operation.setContext({
        headers: {
          ...operation.getContext().headers,
          authorization: refreshJson.accessToken,
        },
      });
    })
    .catch(() => logOut());
};
