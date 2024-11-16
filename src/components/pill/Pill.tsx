import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { ReactNode } from "react";

const pill = cva("flex w-fit items-center rounded-full font-medium leading-5", {
  variants: {
    type: {
      info: "text-cyan-300 bg-cyan-400/30",
      warning: "text-yellow-300 bg-yellow-400/30",
      alert: "text-red-300 bg-red-400/30",
      success: "text-green-300 bg-green-400/30",
      pink: "text-pink-300 bg-pink-400/30",
    },
    size: {
      medium: "px-3 py-1 text-base",
      large: "px-5 py-2 text-lg",
    },
  },
  defaultVariants: {
    type: "info",
    size: "medium",
  },
});

type Props = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof pill>;

export function Pill({ children, className, type, size }: Props) {
  return <span className={pill({ type, size, className })}>{children}</span>;
}
