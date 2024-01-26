// @ts-ignore
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../spinner";

const button = cva(
  [
    "flex border-2 rounded-xl items-center justify-center",
    "focus:ring-pink-400 focus:ring-2",
    "transition duration-300 ease-in-out",
    "disabled:bg-gray-400 disabled:border-gray-400",
  ],
  {
    variants: {
      variant: {
        primary: "bg-pink-100 hover:bg-pink-200 border-black",
        secondary: "bg-white hover:bg-gray-100 border-pink-200",
      },
      size: {
        large: "min-h-12 px-4 py-2 text-lg",
        medium: "min-h-10 px-3 py-1 text-base",
        small: "min-h-8 px-2 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

type Props = {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> &
  VariantProps<typeof button>;

export function Button({
  size,
  variant,
  className,
  children,
  isLoading,
  disabled,
  ...rest
}: Props) {
  return (
    <div className="relative w-fit h-min">
      {isLoading && (
        <div className="absolute z-10 w-full h-full rounded-xl bg-gray-600 bg-opacity-75 flex items-center justify-center">
          <Spinner fast={isLoading} size="xsmall" />
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
