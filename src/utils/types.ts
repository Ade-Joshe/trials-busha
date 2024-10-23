
type Nullable<T> = T | null;

interface IUser {
  name: string;
  token: string;
  baseCurrency: string;
}

type TAPPMODE = "TEST" | "LIVE";
type TSidebarOption = {
  name: string;
  path?: string;
  Icon?: any; // TODO: infer proper type
  active?: boolean;
}

export type {
  Nullable,
  IUser,
  TSidebarOption,
  TAPPMODE
}