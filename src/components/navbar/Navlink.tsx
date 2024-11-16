import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Navlink({ children, ...rest }: Props) {
  return (
    <div className="relative inline-block">
      <a
        {...rest}
        className="flex w-full items-center justify-center p-4 text-black hover:bg-pink-100 active:bg-gray-200"
      >
        {children}
      </a>
    </div>
  );
}
