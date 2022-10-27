import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "views/layout/Layout";
import { EventListPage } from "views/pages/EventListPage";
import { HomePage } from "views/pages/HomePage";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="" element={<></>}>
            <Route index element={<></>} />
            <Route path="" element={<></>} />
          </Route>
          <Route path="" element={<></>}>
            <Route index element={<></>} />
            <Route path="" element={<></>} />
          </Route>
          <Route path="event-list" element={<EventListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
