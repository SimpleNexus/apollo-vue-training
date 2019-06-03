import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const uri = "/graphql";
const httpLink = new HttpLink({
  uri
});

const cache = new InMemoryCache();
cache.writeData({
  data: {
    loanSelected: false,
    selectedLoan: {
      id: "CACHE_DEFAULT",
      amount: 0,
      address: "",
      loanType: "",
      number: 0,
      __typename: "Loan"
    }
  }
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
  resolvers,
  typeDefs
});
