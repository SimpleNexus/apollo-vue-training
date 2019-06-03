import gql from "graphql-tag";

export const typeDefs = gql`
  input SelectLoan {
    id: ID
    amount: Float
    number: Int
    address: String
    loanType: LoanType
  }

  extend type Mutation {
    selectLoan(loan: SelectLoan): Loan
  }

  extend type Query {
    selectedLoan: Loan
    loanSelected: Boolean
  }
`;
