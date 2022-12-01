import React from "react";
type Props = {
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  type?: string;
};

export const MiniContentEditComponent = (props: Props) => {
  const { value, onChange, type } = props;
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <div
        className={"inline-flex items-end " + " " + " w-full h-8" + " text-lg"}
      >
        <input
          type={type == "number" ? "number" : "text"}
          value={value}
          onChange={onChangeText}
          className=" px-2 py-1 bg-gray-200/50 w-full h-full"
          placeholder="input"
        />
      </div>
    </>
  );
};
