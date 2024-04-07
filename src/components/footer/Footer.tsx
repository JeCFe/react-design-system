// @ts-ignore
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
};

export const Footer = ({ children }: Props) => {
  return (
    <div className="mt-20 flex h-auto w-screen items-center bg-white p-4 text-xl text-gray-400 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)] shadow-pink-200">
      <div className="container mx-auto flex justify-center">{children}</div>
    </div>
  );
};
