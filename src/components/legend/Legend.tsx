import { cva, VariantProps } from "class-variance-authority";
// @ts-ignore
import React from "react";

export const dark = cva([], {
  variants: {
    mode: {
      dark: "text-slate-200",
      light: "text-slate-700",
    },
  },
  defaultVariants: {
    mode: "dark",
  },
});

type Props = { legend?: string; hint?: string } & VariantProps<typeof dark>;
export function Legend({ legend, hint, mode }: Props) {
  return (
    <span>
      {legend && (
        <legend
          className={dark({
            mode,
            className: "text-2xl font-bold tracking-tight",
          })}
        >
          {legend}
        </legend>
      )}
      {hint && (
        <div
          className={dark({
            mode,
            className: "text-xl tracking-tight",
          })}
        >
          {hint}
        </div>
      )}
      {(hint || legend) && <div className="my-4" />}
    </span>
  );
}
