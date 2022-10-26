import { ButtonNormalComponent } from "views/components/atom/ButtonNormalComponent";
import { MiniContentEditComponent } from "views/components/atom/MiniContentEditComponent";
import { TipsContentEditComponent } from "views/components/atom/TipsContentEditComponent";

import React from "react";
import { TagType } from "types/TagType";

type LayoutProps = {
  title: string;
  input: JSX.Element;
};
const InputLayout = (props: LayoutProps) => {
  const { title, input } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-col justify-around items-center gap-y-2 " +
          " p-2" +
          " w-full md:w-1/2 h-auto"
        }
      >
        <div
          className={
            "inline-flex items-center justify-start " +
            " border-b-2 border-black  " +
            " w-full text-xl md:text-2xl"
          }
        >
          {title}
        </div>
        <div
          className={
            "inline-flex items-center justify-center flex-wrap gap-2 w-full"
          }
        >
          {input}
        </div>
      </div>
    </>
  );
};

type Props = {
  onClick: () => void;
  tagList: TagType[];
};

export const SearchFormComponent = (props: Props) => {
  const { onClick, tagList } = props;

  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row gap-y-10 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
      >
        <div
          className={"inline-flex flex-row flex-wrap w-full md:w-3/4 h-auto"}
        >
          <div
            className={
              "inline-flex flex-col justify-around items-center gap-y-2" +
              " p-2" +
              " w-full h-auto"
            }
          >
            <div
              className={
                "inline-flex items-center justify-start " +
                " border-b-2 border-black  " +
                " w-full text-xl md:text-2xl"
              }
            >
              タグ
            </div>
            <div
              className={
                "inline-flex items-center justify-start flex-wrap gap-2 w-full"
              }
            >
              {tagList.map((value: TagType) => (
                <TipsContentEditComponent
                  key={value.tagId}
                  color={value.tagColor}
                  text={value.tagValue}
                  onClick={onClick}
                  select={true}
                />
              ))}
            </div>
          </div>
          <InputLayout
            title="場所"
            input={<MiniContentEditComponent text="input" />}
          />
          <InputLayout
            title="予算"
            input={<MiniContentEditComponent text="input" />}
          />
          <InputLayout
            title="募集人数"
            input={
              <div className="flex flex-row items-center justify-between w-full">
                <input
                  className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                  type="text"
                />
                ~
                <input
                  className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                  type="text"
                />
              </div>
            }
          />
          <InputLayout
            title="日程"
            input={
              <div className="flex flex-row items-center justify-between w-full">
                <input
                  className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                  type="text"
                />
                ~
                <input
                  className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                  type="text"
                />
              </div>
            }
          />
        </div>
        <div
          className={
            "inline-flex flex-col-reverse md:flex-col justify-between items-center " +
            " w-full md:w-1/4 h-auto"
          }
        >
          <ButtonNormalComponent text="フォームをクリア" onClick={onClick} />
          <ButtonNormalComponent text="検索" onClick={onClick} />
        </div>
      </div>
    </>
  );
};
