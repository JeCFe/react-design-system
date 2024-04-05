import { VariantProps, cva } from "class-variance-authority";
//@ts-ignore
import React, { ReactNode } from "react";

const pill = cva("rounded-full text-center", {
  variants: {
    type: {
      info: "bg-blue-200",
      warning: "bg-yellow-200",
      alert: "bg-red-200",
      success: "bg-green-200",
    },
    size: {
      medium: "px-2 py-1",
      large: "px-4 py-2",
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
