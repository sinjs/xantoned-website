import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
