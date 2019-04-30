import { GraphQLScalarType } from 'graphql'
import {ResolverFn} from "graphql-tools/dist/stitching/makeRemoteExecutableSchema"

import {loans} from './loans';
import {companies} from './companies';
import {loanOfficers} from './loanOfficers';
import {appUsers} from './appUsers';

type Resolver = (parent: any, args: any) => any;
interface ResolverMap {
    [key: string]:
        | {
            [key: string]: Resolver;
        }
        | {
            [key: string]: {
                subscribe: ResolverFn;
            };
        }
        | GraphQLScalarType;
}

export const resolvers: ResolverMap = {
    LoanOfficer: {
        company(parent) {
            return companies.find(co => co.id === parent.companyId)
        },
        appUsers(parent) {
            return appUsers.filter(au => au.loanOfficerId === parent.id)
        }
    },
    Company: {
        loanOfficers(parent) {
            return loanOfficers.filter(lo => lo.companyId === parent.id)
        }
    },
    AppUser: {
        loanOfficer(parent) {
            return loanOfficers.find(lo => lo.id === parent.loanOfficerId)
        },
        loans(parent) {
            return loans.filter(loan => loan.appUserId === parent.id)
        }
    },
    Loan: {
        appUser(parent) {
            return appUsers.find(au => au.id === parent.appUserId)
        }
    },
    Query: {
        loanOfficer(_, {id}) {
            return loanOfficers.find(lo => lo.id === id)
        },
        loanOfficers() {
            return loanOfficers
        },
        company(_, {id}) {
            return companies.find(co => co.id === id)
        },
        companies() {
            return companies
        },
        appUser(_, {id}) {
            return appUsers.find(au => au.id === id)
        },
        loan(_, {id}) {
            return loans.find(loan => loan.id === id)
        }
    }
}




