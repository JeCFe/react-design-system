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
        <div className="item-center flex w-full flex-col divide-y text-black">
          {children}
        </div>
      </Accordion>
      <div className="hidden w-full flex-col md:visible md:flex md:flex-row">
        <div className="flex w-full flex-row justify-end divide-x-2 text-black">
          {children}
        </div>
      </div>
    </div>
  );
}
