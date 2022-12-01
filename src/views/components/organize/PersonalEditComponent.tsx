import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { MiniTitleComponent } from "views/components/atom/MiniTitleComponent";
import { GrInstagram, GrMail } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import React from "react";
import { ButtonNormalComponent } from "views/components/atom/ButtonNormalComponent";
import { MiniContentEditComponent } from "views/components/atom/MiniContentEditComponent";
import { IconContentEditComponent } from "views/components/atom/IconContentEditComponent";
import { TipsContentEditComponent } from "views/components/atom/TipsContentEditComponent";

import { UserType } from "types/UserType";
import { TagType } from "types/TagType";

import { TagList } from "example/Tag";

type Props = {
  userData: UserType;
};

export const PersonalEditComponent = (props: Props) => {
  const { userData } = props;
  const {
    userEmail,
    userName,
    userNickname,
    userIcon,
    userCoe,
    userSl,
    userComment,
    userLineQr,
    userTwitterId,
    userInstagramId,
    userFacebookId,
    hostEvent,
    joinEvent,
    pastEvent,
    userId,
    userTags,
    userTagsId,
  } = userData;

  const schema = yup.object().shape({
    userName: yup
      .string()
      .typeError("文字列を入力してください")
      .required("名前の入力は必須です。"),
    userNickname: yup
      .string()
      .typeError("文字列を入力してください")
      .required("名前の入力は必須です。"),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserType>({
    resolver: yupResolver(schema),
    defaultValues: {
      userEmail,
      userName,
      userNickname,
      userIcon,
      userCoe,
      userSl,
      userComment,
      userLineQr,
      userTwitterId,
      userInstagramId,
      userFacebookId,
      hostEvent,
      joinEvent,
      pastEvent,
      userId,
      userTags,
      userTagsId,
    },
  });

  const onSubmit: SubmitHandler<UserType> = (formData: UserType) => {
    const temp: UserType = formData;
    console.log(temp);
  };

  const onClick = () => {
    console.log("click");
  };

  return (
    <>
      <form
        className={
          "inline-flex flex-col md:flex-row items-center md:items-start gap-y-2 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={
            "inline-flex justify-center items-center md:flex-shrink-0 " +
            " w-full md:w-52 h-auto "
          }
        >
          <img src={userIcon} className="w-full h-full object-contain" alt="" />
        </div>
        <div
          className={
            "flex flex-col md:flex-row md:flex-wrap gap-y-1 " + " mx-2 " + "  "
          }
        >
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="名前" />
            <Controller
              control={control}
              name="userNickname"
              render={({ field }) => (
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="本名" />
            <Controller
              control={control}
              name="userName"
              render={({ field }) => (
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="所属CoE" />
            <Controller
              control={control}
              name="userCoe"
              render={({ field }) => (
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />{" "}
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="所属SL" />
            <Controller
              control={control}
              name="userSl"
              render={({ field }) => (
                <MiniContentEditComponent
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />{" "}
          </div>
          <div className={"inline-flex flex-col md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="一言自己紹介" />
            </div>
            <Controller
              control={control}
              name="userComment"
              render={({ field }) => (
                <textarea
                  className={"px-2 py-1 w-full h-40 bg-gray-200/50 resize-none"}
                  placeholder="input"
                  value={field.value}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    field.onChange(event.target.value);
                  }}
                />
              )}
            />
          </div>
          <div className={"inline-flex flex-col md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="興味のあるタグ" />
            </div>
            <div
              className={
                "inline-flex flex-row flex-wrap gap-2" + " w-full h-auto"
              }
            >
              {TagList.map((tag: TagType) => (
                <Controller
                  key={tag.tagId}
                  control={control}
                  name="userTagsId"
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
          <div className={"inline-flex flex-col md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="SNS" />
            </div>
            <div
              className={
                "inline-flex flex-col md:flex-row gap-y-1 " + " w-full h-auto"
              }
            >
              <div
                className={
                  "inline-flex flex-col md:justify-around gap-y-1 md:gap-0" +
                  " w-full md:w-1/2 h-auto"
                }
              >
                <Controller
                  control={control}
                  name="userEmail"
                  render={({ field }) => (
                    <IconContentEditComponent
                      text={field.value}
                      IconContent={<GrMail className="w-full h-full" />}
                      onClick={onClick}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="userTwitterId"
                  render={({ field }) => (
                    <IconContentEditComponent
                      text={field.value}
                      IconContent={<BsTwitter className="w-full h-full" />}
                      onClick={onClick}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="userInstagramId"
                  render={({ field }) => (
                    <IconContentEditComponent
                      text={field.value}
                      IconContent={<GrInstagram className="w-full h-full" />}
                      onClick={onClick}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="userFacebookId"
                  render={({ field }) => (
                    <IconContentEditComponent
                      text={field.value}
                      IconContent={
                        <FaFacebookSquare className="w-full h-full" />
                      }
                      onClick={onClick}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div
                className={
                  "inline-flex justify-center items-center " +
                  " w-full md:w-1/2 h-auto"
                }
              >
                <img
                  src={userLineQr}
                  className="w-full md:w-10/12 h-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className={
              "flex items-center justify-center md:justify-end " +
              " " +
              " w-full "
            }
          >
            <div className={"inline-block w-full md:w-1/2"}>
              <ButtonNormalComponent
                text="送信"
                onClick={onClick}
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
      <div>
        {errors.userNickname?.message}
        {errors.userName?.message}
      </div>
    </>
  );
};
