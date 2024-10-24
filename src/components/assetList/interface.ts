export type TTab = "" | "bank" | "crypto";
export type TAccount = {
  id: number;
  label: string;
  value: TTab
};