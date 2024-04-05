import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";

const pill = cva("", {
  variants: {
    type: {
      info: "bg-blue-200",
      warning: "bg-yellow-200",
      alert: "bg-red-200",
    },
    size: {
      small: "px-2 py-1",
      medium: "px-3 py-2",
      large: "px-4 py-3",
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
  return <div className={pill({ type, size, className })}>{children}</div>;
}
