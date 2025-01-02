import { cva } from "class-variance-authority";
// @ts-ignore
import React, { HtmlHTMLAttributes, ReactNode, useState } from "react";

export const accordionCva = cva(
  "transition-max-height overflow-hidden duration-300 ease-in-out",
  {
    variants: {
      open: {
        true: "max-h-96 opacity-100",
        false: "max-h-0 opacity-0",
      },
    },
    defaultVariants: {
      open: true,
    },
  },
);

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
        className="w-fit cursor-pointer pb-2 text-blue-500 underline underline-offset-4 transition duration-200 ease-in-out hover:text-blue-900"
        onClick={toggleAccordion}
      >
        {!isOpen ? openTitle : closeTitle}
      </div>
      <div className={accordionCva({ open: isOpen })}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
