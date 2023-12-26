// @ts-ignore
import React, { ReactNode } from "react";

type Props = {
  title?: string;
  user?: ReactNode | ReactNode[];
  navbar?: ReactNode | ReactNode[];
};

export const Header = ({ title, user, navbar }: Props) => {
  return (
    <div className="flex items-center w-screen h-auto bg-white shadow-2xl shadow-pink-200 mb-20 ">
      <div className="container mx-auto py-2 divide-y">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
          <div className="flex flex-row md:flex-col md:grow md:justify-center text-2xl md:text-3xl font-bold">
            {title}
          </div>
          {user && (
            <div className="flex flex-row md:flex-col justify-start md:justify-end text-lg md:text-xl">
              {user}
            </div>
          )}
        </div>
        {navbar && <div className="mt-2 pt-2"> {navbar}</div>}
      </div>
    </div>
  );
};
