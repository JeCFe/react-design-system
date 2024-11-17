import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner, spinner } from "../spinner";

const button = cva(
  [
    "flex border-[3px] tracking-normal rounded items-center justify-center focus:outline-none font-bold",
    "disabled:bg-gray-400 disabled:border-gray-400 disabled:text-slate-700",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-pink-500 border-pink-500 text-slate-100",
          "hover:bg-pink-600 hover:border-pink-600",
          "focus:ring focus:ring-yellow-400",
        ],
        secondary: [
          "bg-slate-100  border-cyan-500 text-cyan-500",
          "hover:bg-cyan-500 hover:text-slate-100",
          "focus:ring focus:ring-yellow-400",
        ],
        destructive: [
          "bg-red-500 border-red-500 text-slate-100",
          "hover:bg-red-700 hover:border-red-700",
          "focus:ring focus:ring-yellow-400",
        ],
      },
      size: {
        large: "px-4 py-1 text-lg",
        medium: "px-3 py-1 text-base",
        small: "px-2 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

type Props = {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> &
  VariantProps<typeof button>;

type ButtonSize = NonNullable<VariantProps<typeof button>["size"]>;
type SpinnerSize = NonNullable<VariantProps<typeof spinner>["size"]>;
type SizeMap = Record<ButtonSize, SpinnerSize>;
export function Button({
  size,
  variant,
  className,
  children,
  isLoading,
  disabled,
  ...rest
}: Props) {
  const spinnerSizeMapping: SizeMap = {
    large: "small",
    medium: "small",
    small: "xsmall",
  };
  return (
    <div className="relative h-min w-fit">
      {isLoading && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center rounded bg-slate-900 bg-opacity-75">
          <Spinner
            fast={isLoading}
            size={spinnerSizeMapping[size || "medium"]}
          />
        </div>
      )}
      <button
        {...rest}
        className={button({ size, variant, className })}
        disabled={isLoading || disabled}
      >
        {children}
      </button>
    </div>
  );
}
