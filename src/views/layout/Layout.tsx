import React from "react";
import { Outlet } from "react-router-dom";
import { ButtonCreateFloatComponent } from "views/components/atom/ButtonCreateFloatComponent";
import { HeaderComponent } from "views/components/organize/HeaderComponent";

export const Layout = () => {
  const onClickLogo = () => {
    console.log("logo");
  };
  const onClickMypage = () => {
    console.log("personal");
  };
  const onClickCreateEvent = () => {
    console.log("create event");
  };
  return (
    <>
      <HeaderComponent
        logo="https://placehold.jp/30/dd6699/ffffff/300x150.png?text=image"
        logoClick={onClickLogo}
        btnClick={onClickMypage}
      />
      <main className="flex flex-col items-center m-auto w-full max-w-6xl">
        <Outlet />
      </main>
      <ButtonCreateFloatComponent onClick={onClickCreateEvent} />
    </>
  );
};
