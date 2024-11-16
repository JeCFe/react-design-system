import { ReactNode } from "react";

type Props = {
  title?: string;
  user?: ReactNode | ReactNode[];
  navbar?: ReactNode | ReactNode[];
  logo?: ReactNode;
};

export const Header = ({ title, user, navbar, logo }: Props) => {
  return (
    <div className="mb-20 flex h-auto w-screen items-center bg-white shadow-2xl shadow-pink-200 ">
      <div className="container mx-auto divide-y py-2">
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0">
          <div className="mr-12 flex flex-row md:justify-start">{logo}</div>
          <div className="flex flex-row text-2xl font-bold md:grow md:flex-col md:justify-center md:text-3xl">
            {title}
          </div>
          {user && (
            <div className="flex flex-row justify-start text-lg md:flex-col md:justify-end md:text-xl">
              {user}
            </div>
          )}
        </div>
        {navbar && <div className="mt-2 pt-2"> {navbar}</div>}
      </div>
    </div>
  );
};
