"use client";
import { ReactNode, useState } from "react";
import MenuBarMobile from "./Mobile";
import Sidebar from "./Sidebar";

export type NavLink = { name: string; route: string };

type Props = {
  title?: string;
  children: ReactNode | ReactNode[];
  navLinks: NavLink[];
};

export function SidebarWrapper({ children, title, navLinks }: Props) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex flex-row min-h-screen h-full w-full">
      <div className="flex flex-col">
        <Sidebar
          show={showSidebar}
          setter={setShowSidebar}
          title={title}
          navLinks={navLinks}
        />
      </div>

      <MenuBarMobile setter={setShowSidebar} title={title} />
      <div className="flex flex-col container mx-auto w-full">{children}</div>
    </div>
  );
}
