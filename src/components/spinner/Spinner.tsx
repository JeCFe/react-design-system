import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React from "react";
import { SpinnerSvg } from "../react-svg";

export const spinnerCva = cva("", {
  variants: {
    size: {
      large: "w-40 h-40",
      medium: "w-20 h-20",
      small: "w-10 h-10",
      xsmall: "w-8 h-8",
    },
    fast: {
      true: "animate-spin",
      false: "animate-[spin_4s_linear_infinite]",
    },
  },
  defaultVariants: {
    size: "medium",
    fast: false,
  },
});

type Props = {
  fast?: boolean;
  className?: string;
} & VariantProps<typeof spinnerCva>;

export function Spinner({ fast, className, size }: Props) {
  return <SpinnerSvg className={spinnerCva({ fast, size, className })} />;
}
