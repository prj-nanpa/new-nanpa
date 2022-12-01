import React from "react";

import { TitleComponent } from "views/components/atom/TitleComponent";
import { PersonalEditComponent } from "views/components/organize/PersonalEditComponent";

import { UserData1 } from "example/User";
export const MyPageEditPage = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full">
        <TitleComponent text="個人設定" />
      </div>
      <div className="flex flex-col items-center w-full">
        <PersonalEditComponent userData={UserData1} />
      </div>
    </section>
  );
};
