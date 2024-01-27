import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { ReactNode } from "react";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-transparent",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:bg-pink-300 hover:text-muted-foreground",
  ],
  {
    variants: {
      active: {
        true: "bg-pink-200",
      },
      size: {
        small: "h-9 px-2 text-base",
        medium: "h-10 px-3 text-lg",
        large: "h-11 px-4 text-xl",
      },
    },
    defaultVariants: {
      active: true,
      size: "medium",
    },
  },
);

type Props = {
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode | ReactNode[];
  className?: string;
} & VariantProps<typeof toggleVariants>;

export function ToggleItem({
  active,
  onClick,
  children,
  size,
  className,
}: Props) {
  return (
    <button
      className={toggleVariants({ active, size, className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
