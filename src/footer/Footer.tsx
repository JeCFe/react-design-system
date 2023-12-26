// @ts-ignore
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
};

export const Footer = ({ children }: Props) => {
  return (
    <div className="flex items-center w-screen h-auto p-4 bg-white shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)] shadow-pink-200 mt-20 text-xl text-gray-400">
      <div className="container mx-auto flex justify-center">{children}</div>
    </div>
  );
};
