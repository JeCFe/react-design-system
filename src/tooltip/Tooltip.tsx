//@ts-ignore
import React, { ReactNode, useState } from "react";
import { Info } from "../react-svg";
import { VariantProps, cva } from "class-variance-authority";

const tooltip = cva("", {
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
} & VariantProps<typeof tooltip>;

export function Tooltip({ children, type, size }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseLeave={() => setIsVisible(!isVisible)}
    >
      <span onMouseEnter={() => setIsVisible(!isVisible)}>
        <Info className={tooltip({ type, size })} />
      </span>
      {isVisible && (
        <div className="absolute z-10 bg-white p-2 w-max max-w-48 h-min rounded-md shadow-lg text-base">
          {children}
        </div>
      )}
    </div>
  );
}
