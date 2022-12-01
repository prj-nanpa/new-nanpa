import { ButtonNormalComponent } from "views/components/atom/ButtonNormalComponent";
import { MiniContentEditComponent } from "views/components/atom/MiniContentEditComponent";
import { TipsContentEditComponent } from "views/components/atom/TipsContentEditComponent";

import React from "react";
import { TagType } from "types/TagType";
import { SearchFormType } from "types/SearchFormType";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  const schema = yup.object().shape({
    num: yup.string().typeError("文字列を入力してください"),
    budget: yup.string().typeError("文字列を入力してください"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm<SearchFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      budget: 0,
      minguest: 0,
      maxguest: 0,
      tagsid: [],
      fromdate: "",
      todate: "",
      num: 0,
    },
  });
  const onSubmit: SubmitHandler<SearchFormType> = (
    formData: SearchFormType
  ) => {
    const temp: SearchFormType = formData;
    console.log(temp);
  };
  const onClickReset = () => {
    reset();
  };
  return (
    <>
      <form
        className={
          "inline-flex flex-col md:flex-row gap-y-10 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
        onSubmit={handleSubmit(onSubmit)}
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
              {tagList.map((tag: TagType) => (
                <Controller
                  key={tag.tagId}
                  control={control}
                  name="tagsid"
                  render={({ field }) => (
                    <TipsContentEditComponent
                      text={tag.tagValue}
                      color={tag.tagColor}
                      onClick={() =>
                        field.onChange(
                          field.value.includes(tag.tagId)
                            ? field.value.filter((value) => value != tag.tagId)
                            : [...field.value, tag.tagId]
                        )
                      }
                      select={field.value.includes(tag.tagId)}
                    />
                  )}
                />
              ))}
            </div>
          </div>
          {/* <Controller
            control={control}
            name="num"
            render={({ field }) => (
              <InputLayout
                title="場所"
                input={
                  <MiniContentEditComponent
                    value={field.value}
                    onChange={field.onChange}
                  />
                }
              />
            )}
          /> */}
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <InputLayout
                title="予算"
                input={
                  <MiniContentEditComponent
                    value={field.value}
                    onChange={field.onChange}
                    type="number"
                  />
                }
              />
            )}
          />

          <InputLayout
            title="募集人数"
            input={
              <div className="flex flex-row items-center justify-between w-full">
                <input
                  {...register("minguest")}
                  className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                  type="text"
                />
                ~
                <input
                  {...register("maxguest")}
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
                  {...register("todate")}
                  className="px-2 py-1 bg-gray-200/50 w-2/5 h-8"
                  type="text"
                />
                <span>~</span>
                <input
                  {...register("fromdate")}
                  className="px-2 py-1 bg-gray-200/50  w-2/5 h-8"
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
          <ButtonNormalComponent
            text="フォームをクリア"
            onClick={onClickReset}
            type="reset"
          />
          <ButtonNormalComponent text="検索" onClick={onClick} type="submit" />
        </div>
      </form>
    </>
  );
};
