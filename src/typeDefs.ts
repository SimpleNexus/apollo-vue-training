import {gql} from 'apollo-server'
export const typeDefs = gql`
    type LoanOfficer {
        id: ID!
        name: String!
        company: Company!
        appUsers: [AppUser]
    }

    type Company {
        id: ID!
        name: String!
        loanOfficers: [LoanOfficer]
    }

    type AppUser {
        id: ID!
        name: String!
        loanOfficer: LoanOfficer!
        loans: [Loan]
    }

    type Loan {
        id: ID!
        number: Int
        amount: Float
        appUser: AppUser!
        address: String
        loanType: LoanType
    }

    enum LoanType {
        CONVENTIONAL
        FHA
        USDA
        VA
    }


   type Query {
     loanOfficer(id: ID!): LoanOfficer
     loanOfficers: [LoanOfficer]
     company(id: ID!): Company
     companies: [Company]
     appUser(id: ID!): AppUser
     loan(id: ID!): Loan
   }
`;
