// @ts-ignore
import React, { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export function Anchor({ children, className, ...rest }: Props) {
  return (
    <a
      {...rest}
      className={`inline-block underline underline-offset-4 text-blue-500 hover:text-blue-900 transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </a>
  );
}
