export const resolvers = {
  Mutation: {
    selectLoan: (_root, { loan }, { cache }) => {
      cache.writeData({
        data: {
          selectedLoan: loan,
          loanSelected: true
        }
      });
    }
  }
};
