import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "views/layout/Layout";
import { EventEditPage } from "views/pages/EventEditPage";
import { EventListPage } from "views/pages/EventListPage";
import { EventPage } from "views/pages/EventPage";
import { HomePage } from "views/pages/HomePage";
import { MyPage } from "views/pages/MyPage";
import { MyPageEditPage } from "views/pages/MyPageEdit";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<Outlet />}>
            <Route index element={<EventListPage />} />
            <Route path="event" element={<Outlet />}>
              <Route index element={<EventPage />} />
              <Route path="edit" element={<EventEditPage />} />
            </Route>
          </Route>

          <Route path="mypage" element={<Outlet />}>
            <Route index element={<MyPage />} />
            <Route path="edit" element={<MyPageEditPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
