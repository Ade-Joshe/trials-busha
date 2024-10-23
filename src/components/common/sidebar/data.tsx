import { BalanceIcon, ComplianceIcon, DeveloperIcon, HomeIcon, PayoutIcon, RecipientIcon, SettingsIcon } from "../../../assets";
import { TSidebarOption } from "../../../utils";

const data: TSidebarOption[] = [
  {
    name: "Home",
    path: "/",
    Icon: HomeIcon,
    active: false
  },
  {
    name: "Balances",
    path: "/balance", //replace with service urll
    Icon: BalanceIcon,
    active: false
  },
  {
    name: "Payouts",
    path: "/#", //replace with wallet urll
    Icon: PayoutIcon,
    active: false
  },
  {
    name: "Recipients",
    path: "/#", //replace with salad urll
    Icon: RecipientIcon,
    active: false
  },
  {
    name: "Compliance",
    path: "/#", //replace with service urll
    Icon: ComplianceIcon,
    active: false
  },
  {
    name: "Developers",
    path: "/#", //replace with salad urll
    Icon: DeveloperIcon,
    active: false
  },
  {
    name: "Settings",
    path: "/#", //replace with salad urll
    Icon: SettingsIcon,
    active: false
  },
];

export default data;