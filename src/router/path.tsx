import React, { lazy } from "react";

const Dashboard = lazy(() =>
  import("../screens/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);

const Detail = lazy(() =>
  import("../screens/Details").then((module) => ({
    default: module.Detail,
  }))
);

export const RoutesName: any = {
  Dashboard: {
    path: "/",
    componentName: "Dashboard",
  },
  Detail: {
    path: "/detail/:id",
    componentName: "Detail",
  },
};

export const RoutesNameComponentMap: any = {
  Dashboard: <Dashboard />,
  Detail: <Detail />,
};
