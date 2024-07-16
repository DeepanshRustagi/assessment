import React, { lazy } from "react";

const Dashboard = lazy(() =>
  import("../screens/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);

export const RoutesName: any = {
  Dashboard: {
    path: "/",
    componentName: "Dashboard",
  },
};

export const RoutesNameComponentMap: any = {
  Dashboard: <Dashboard />,
};
