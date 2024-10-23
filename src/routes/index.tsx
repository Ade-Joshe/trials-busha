import React from "react";
import { RouteObject } from "react-router-dom";
import { DashboardPage, BalancePage } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/balance",
    element: <BalancePage />,
  },
];

export default routes;