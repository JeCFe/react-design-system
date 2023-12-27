import React, { Dispatch, SetStateAction } from "react";
import { Delete } from "..";

type Props = {
  setter: Dispatch<SetStateAction<boolean>>;
  title?: string;
};

export default function MenuBarMobile({ title, setter }: Props) {
  return (
    <div className="sm:hidden w-full h-min bg-white shadow-2xl shadow-pink-200 flex flex-row  px-2">
      <button
        className="text-4xl flex text-black"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <Delete />
      </button>
      {title && (
        <div className="flex justify-center items-center w-full">{title}</div>
      )}
    </div>
  );
}
