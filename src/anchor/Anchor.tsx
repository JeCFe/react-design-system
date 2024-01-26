// @ts-ignore
import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

const anchor = cva([
  "inline-block underline underline-offset-4",
  "text-blue-500 hover:text-blue-900",
  "transition duration-200 ease-in-out",
  "disabled:text-gray-300",
]);

type Props = {
  children: ReactNode | ReactNode[];
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Anchor({ children, className, ...rest }: Props) {
  return (
    <a {...rest} className={anchor({ className })}>
      {children}
    </a>
  );
}
