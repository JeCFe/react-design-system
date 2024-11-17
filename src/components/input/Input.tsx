import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "../error-message";
import { dark, Legend } from "../legend";
import { LocalErrorWrapper } from "../local-error-wrapper";

const input = cva(
  [
    "flex w-full space-y-2 border-2 rounded p-2.5 md:max-w-xl appearance-none focus:outline-none",
    "hover:border-pink-400 focus:ring-yellow-400 focus:ring-2 text-slate-900",
  ],
  {
    variants: {
      mode: {
        dark: "border-transparent",
        light: "border-slate-900 focus:border-2",
      },
    },
    defaultVariants: {
      mode: "dark",
    },
  },
);

type Props = {
  legend?: string;
  hint?: string;
  errors?: FieldError[];
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> &
  VariantProps<typeof dark>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ legend, hint, errors, mode, ...rest }: Props, ref) => (
    <div>
      <Legend legend={legend} hint={hint} mode={mode} />
      <LocalErrorWrapper errors={errors}>
        <div className="flex max-w-xs">
          <input
            ref={ref}
            type="text"
            className={input({ mode })}
            {...rest}
            aria-label={legend}
          />
        </div>
      </LocalErrorWrapper>
    </div>
  ),
);
