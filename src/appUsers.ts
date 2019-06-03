interface AppUser {
  id: number;
  name: string;
  loanOfficerId: number;
}

export const appUsers: AppUser[] = [
  {
    id: 1,
    name: "George Fillmore",
    loanOfficerId: 1
  },
  {
    id: 2,
    name: "Gina Fillmore",
    loanOfficerId: 1
  },
  {
    id: 3,
    name: "Jeffrey Montana",
    loanOfficerId: 2
  },
  {
    id: 4,
    name: "June Montana",
    loanOfficerId: 2
  }
];
