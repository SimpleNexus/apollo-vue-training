import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
cache.writeData({
  data: {
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

export { cache };
