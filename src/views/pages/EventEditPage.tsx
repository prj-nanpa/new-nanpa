import React from "react";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { PageContentEditComponent } from "views/components/organize/PageContentEditComponent";

// seed
import { EventData } from "example/Event";

export const EventEditPage = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full">
        <TitleComponent text="イベント編集" />
      </div>
      <div className="flex flex-col items-center w-full">
        <PageContentEditComponent event={EventData} />
      </div>
    </section>
  );
};
