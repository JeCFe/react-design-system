// @ts-ignore
import React, { ReactNode } from "react";
import { Accordion } from "../accordion";

type Props = {
  children: ReactNode | ReactNode[];
};

// Need to a way to handle overflow
export function Navbar({ children }: Props) {
  return (
    <div>
      <Accordion
        openTitle="Open"
        closeTitle="Close"
        className="visible md:hidden"
      >
        <div className="flex w-full flex-col item-center text-black divide-y">
          {children}
        </div>
      </Accordion>
      <div className="flex-col hidden md:flex md:visible md:flex-row w-full">
        <div className="flex w-full flex-row justify-end text-black divide-x-2">
          {children}
        </div>
      </div>
    </div>
  );
}
