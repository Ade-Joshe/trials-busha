import React from "react";
import { DashboardPage, BalancePage, LoginPage } from "../pages";
import RouteRenderer from "./RouteRenderer"

type TRoutes = {
  isAuth: boolean;
  path: string;
  roles: string[];
  element: JSX.Element
}

const routes: TRoutes[] = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
    isAuth: true,
    roles: ["admin", "user"]
  },
  {
    path: "/balance",
    element: <BalancePage />,
    isAuth: true,
    roles: ["admin", "user"]
  },
  {
    path: "/",
    element: <LoginPage />,
    isAuth: false,
    roles: []
  },
];

export { RouteRenderer };
export default routes;