import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<></>} />
        <Route path="" element={<></>}>
          <Route index element={<></>} />
          <Route path="" element={<></>} />
        </Route>
        <Route path="" element={<></>}>
          <Route index element={<></>} />
          <Route path="" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
