import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "./SidebarWrapper";
import { User } from "../header/User";

type Props = {
  setter: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  title?: string;
  navLinks?: NavLink[];
};
export default function Sidebar({ show, title, navLinks, setter }: Props) {
  const MenuItem = ({ name, route }: NavLink) => {
    return (
      <a
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className="flex flex-row w-full gap-1 text-base pl-6 py-3 border-b-[1px] border-b-black hover:bg-pink-100 active:bg-pink-200"
      >
        <div>{name}</div>
      </a>
    );
  };

  const ModalOverlay = () => (
    <div
      className="flex sm:hidden fixed top-0 right-0 bottom-0 left-0 z-30"
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div
        className={`flex flex-col bg-gray-100 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed sm:static top-0 bottom-0 left-0 z-40 ${
          show ? " ml-0" : " ml-[-250px] sm:ml-0 h-screen overflow-y-auto"
        }`}
      >
        {title && (
          <div className="p-2 flex flex-row text-2xl border-b border-b-black">
            {title}
          </div>
        )}

        <div className="flex flex-row">
          <div className="flex flex-col w-full">
            {navLinks &&
              navLinks.map((item) => (
                <MenuItem
                  key={item.route}
                  name={item.name}
                  route={item.route}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-row grow" />
        <div className="p-2 flex flex-row items-end border-t border-t-black bg-pink-100">
          <User />
        </div>
      </div>

      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
