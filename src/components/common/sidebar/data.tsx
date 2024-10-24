import { BalanceIcon, ComplianceIcon, DeveloperIcon, HomeIcon, PayoutIcon, RecipientIcon, RedirectIcon, SettingsIcon } from "../../../assets";
import { TSidebarOption } from "../../../utils";

const data: TSidebarOption[] = [
  {
    name: "Home",
    path: "/dashboard",
    Icon: HomeIcon,
  },
  {
    name: "Balances",
    path: "/balance", //replace with service urll
    Icon: BalanceIcon,
  },
  {
    name: "Payouts",
    path: "/dashboard#", //replace with wallet urll
    Icon: PayoutIcon,
  },
  {
    name: "Recipients",
    path: "/dashboard#", //replace with salad urll
    Icon: RecipientIcon,
  },
  {
    name: "Compliance",
    path: "/dashboard#", //replace with service urll
    Icon: ComplianceIcon,
  },
  {
    name: "Developers",
    path: "/dashboard#", //replace with salad urll
    Icon: DeveloperIcon,
  },
  {
    name: "Settings",
    path: "/dashboard#", //replace with salad urll
    Icon: SettingsIcon,
    hasDivider: true
  },
  {
    name: "Docs",
    path: "/dashboard#", //replace with salad urll
    // Icon: null,
    SuffixIcon: RedirectIcon,
    isMobile: true
  },
  {
    name: "Help",
    path: "/dashboard#", //replace with salad urll
    // Icon: null,
    isMobile: true
  },
];

export default data;