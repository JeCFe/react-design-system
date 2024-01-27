import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { ReactNode } from "react";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md transition-colors",
    "hover:bg-pink-400 hover:text-muted-foreground",
  ],
  {
    variants: {
      active: {
        true: "bg-pink-300",
      },
      size: {
        small: "h-8 px-2.5 text-small",
        medium: "h-9 px-3 text-lg",
        large: "h-10 px-3.5 text-xl",
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
