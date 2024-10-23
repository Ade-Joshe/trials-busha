type Nullable<T> = T | null;

interface IUser {
  name: string;
  age: number;
  token: string;
}

type IAPPMODE = "TEST" | "LIVE"

export type {
  Nullable,
  IUser,
  IAPPMODE
}