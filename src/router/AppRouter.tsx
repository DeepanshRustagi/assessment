import React, { Suspense } from "react";
import { RoutesName, RoutesNameComponentMap } from "./path";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutesName.Dashboard.path}
          element={
            <Suspense fallback={<></>}>
              {RoutesNameComponentMap[RoutesName.Dashboard.componentName]}
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<></>}>
              <Navigate replace to={RoutesName.Dashboard.path} />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
