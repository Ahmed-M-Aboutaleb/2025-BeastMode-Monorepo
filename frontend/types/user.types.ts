export type Sex = "Male" | "Female";

export interface Profile {
  firstName: string;
  lastName: string;
  sex: Sex;
  birthDate: string; // ISO date
}

export interface User {
  email: string;
  password: string;
  profile?: Profile;
}