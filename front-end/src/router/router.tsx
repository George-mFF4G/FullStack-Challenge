import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import RequireAuth from "./requireAuth";

export const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard"
          element={<RequireAuth component={DashBoard} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
