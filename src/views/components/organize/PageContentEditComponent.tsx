import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonRegisterComponent } from "views/components/atom/ButtonRegisterComponent";
import { MiniContentEditComponent } from "views/components/atom/MiniContentEditComponent";
import { TipsContentEditComponent } from "views/components/atom/TipsContentEditComponent";
import React from "react";
import { TagType } from "types/TagType";
import { EventType } from "types/EventType";

import { TagList } from "example/Tag";

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
          "inline-flex flex-col md:flex-row justify-around items-center gap-y-2 " +
          "w-full md:max-w-md h-auto"
        }
      >
        <div
          className={
            "inline-flex items-center justify-start " +
            " border-b-2 border-black md:border-b-0 " +
            " w-full md:w-1/2 text-xl md:text-2xl"
          }
        >
          {title}
        </div>
        <div
          className={
            "inline-flex items-center justify-center flex-wrap gap-2 w-full md:w-1/2"
          }
        >
          {input}
        </div>
      </div>
    </>
  );
};
const TextAreaLayout = (props: LayoutProps) => {
  const { title, input } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row justify-around items-start gap-y-2 " +
          "w-full md:max-w-md"
        }
      >
        <div
          className={
            "inline-flex items-center justify-start " +
            " border-b-2 border-black md:border-b-0 " +
            " w-full md:w-1/2 text-xl md:text-2xl"
          }
        >
          {title}
        </div>
        <div
          className={"inline-flex items-center justify-center w-full md:w-1/2"}
        >
          {input}
        </div>
      </div>
    </>
  );
};

type Props = {
  event: EventType;
};
export const PageContentEditComponent = (props: Props) => {
  const { event } = props;
  const {
    eventBudget,
    eventCreatedDate,
    eventDate,
    eventDeadline,
    eventGuestLength,
    eventGuests,
    eventId,
    eventImage,
    eventLeftDate,
    eventMaxGuest,
    eventMinGuest,
    eventName,
    eventNote,
    eventOwner,
    eventPlace,
    eventTags,
    eventTagsId,
    userId,
  } = event;

  const schema = yup.object().shape({
    eventName: yup
      .string()
      .typeError("文字列を入力してください")
      .required("名前の入力は必須です。"),
    eventNote: yup
      .string()
      .typeError("文字列を入力してください")
      .required("名前の入力は必須です。"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<EventType>({
    resolver: yupResolver(schema),
    defaultValues: {
      eventBudget,
      eventCreatedDate,
      eventDate,
      eventDeadline,
      eventGuestLength,
      eventGuests,
      eventId,
      eventImage,
      eventLeftDate,
      eventMaxGuest,
      eventMinGuest,
      eventName,
      eventNote,
      eventOwner,
      eventPlace,
      eventTags,
      eventTagsId,
      userId,
    },
  });
  const onSubmit: SubmitHandler<EventType> = (formData: EventType) => {
    const temp: EventType = formData;
    console.log(temp);
  };
  const onClick = () => {
    console.log("point");
  };
  return (
    <>
      <form
        className={
          "inline-flex flex-col justify-center items-center gap-y-4 md:gap-y-12  " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="eventName"
          render={({ field }) => (
            <InputLayout
              title="イベント名"
              input={
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="eventNote"
          render={({ field }) => (
            <TextAreaLayout
              title="募集文章"
              input={
                <textarea
                  className="px-2 py-1 bg-gray-200/50 w-full h-36 resize-none"
                  value={field.value}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    field.onChange(event.target.value);
                  }}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="eventDeadline"
          render={({ field }) => (
            <InputLayout
              title="募集締め切り"
              input={
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="eventDate"
          render={({ field }) => (
            <InputLayout
              title="開催日時"
              input={
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="eventBudget"
          render={({ field }) => (
            <InputLayout
              title="予算"
              input={
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              }
            />
          )}
        />

        <InputLayout
          title="タグ"
          input={
            <>
              {TagList.map((tag: TagType) => (
                <Controller
                  key={tag.tagId}
                  control={control}
                  name="eventTagsId"
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
            </>
          }
        />
        <InputLayout
          title="募集人数"
          input={
            <div className="flex flex-row items-center justify-between w-full">
              <input
                className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                type="text"
                {...register("eventMinGuest")}
              />
              ~
              <input
                className="px-2 py-1 bg-gray-200/50 w-12 h-8"
                type="text"
                {...register("eventMaxGuest")}
              />
            </div>
          }
        />
        <div className={"flex items-center justify-center "}>
          <ButtonRegisterComponent
            text="公開"
            color="green"
            onClick={onClick}
            type="submit"
          />
        </div>
      </form>
      <div>
        {errors.eventName?.message}
        {errors.eventNote?.message}
      </div>
    </>
  );
};
