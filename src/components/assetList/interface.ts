export type Tab = "" | "bank" | "crypto";
export type TAccount = {
  id: number;
  label: string;
  value: Tab
};