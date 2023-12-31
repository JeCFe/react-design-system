// @ts-ignore
import React, { HtmlHTMLAttributes } from "react";
import { useState, ReactNode } from "react";

type Props = {
  openTitle: ReactNode | ReactNode[];
  closeTitle: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
} & HtmlHTMLAttributes<HTMLDivElement>;
export function Accordion({ openTitle, closeTitle, children, ...rest }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full" {...rest}>
      <div
        className="w-fit pb-2 underline underline-offset-4 text-blue-500 hover:text-blue-900 transition duration-200 ease-in-out cursor-pointer"
        onClick={toggleAccordion}
      >
        {!isOpen ? openTitle : closeTitle}
      </div>
      <div
        className={`transition-max-height ease-in-out duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
