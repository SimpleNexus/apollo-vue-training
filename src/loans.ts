enum LoanType {
    CONVENTIONAL = "CONVENTIONAL",
    FHA = "FHA",
    USDA = "USDA",
    VA = "VA"
}
type Loan = {
    id: number
    amount: number
    appUserId: number
    address: string
    loanType: LoanType
}

export const loans: Array<Loan> = [{
    id: 1,
    amount: 20000,
    appUserId: 1,
    address: "123 Sesame St",
    loanType: LoanType.CONVENTIONAL
}, {
    id: 2,
    amount: 392814,
    appUserId: 2,
    address: "500 East 500 West",
    loanType: LoanType.FHA
}, {
    id: 3,
    amount: 123141,
    appUserId: 3,
    address: "221b Baker Street",
    loanType: LoanType.USDA
}, {
    id: 4,
    amount: 14000000,
    appUserId: 4,
    address: "1000 Downing Street",
    loanType: LoanType.VA
}]
