
type Nullable<T> = T | null;

interface IUser {
  name: string;
  role?: string;
  token: string;
  baseCurrency: string;
}

type TAPPMODE = "TEST" | "LIVE";
type TSidebarOption = {
  name: string;
  path?: string;
  Icon?: any; // TODO: infer proper type
  isMobile?: boolean;
  hasDivider?: boolean;
  SuffixIcon?: any
}

export type {
  Nullable,
  IUser,
  TSidebarOption,
  TAPPMODE
}