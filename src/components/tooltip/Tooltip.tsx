import { VariantProps, cva } from "class-variance-authority";
//@ts-ignore
import React, { ReactNode, useState } from "react";
import { Info } from "../react-svg";

const tooltipCva = cva("", {
  variants: {
    type: {
      info: "fill-blue-500 hover:fill-blue-700",
      warning: "fill-yellow-500 hover:fill-yellow-700",
      danger: "fill-red-500 hover:fill-red-700",
    },
    size: {
      small: "w-4 h-4",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
  defaultVariants: {
    type: "info",
    size: "medium",
  },
});

type Props = {
  children: ReactNode | ReactNode[];
} & VariantProps<typeof tooltipCva>;

export function Tooltip({ children, type, size }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseLeave={() => setIsVisible(!isVisible)}
    >
      <span onMouseEnter={() => setIsVisible(!isVisible)}>
        <Info className={tooltipCva({ type, size })} />
      </span>
      {isVisible && (
        <div className="absolute z-10 h-min w-max max-w-48 rounded-md bg-white p-2 text-base shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}
