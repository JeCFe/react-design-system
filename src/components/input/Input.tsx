import { cva } from "class-variance-authority";
import React, { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "../error-message";
import { Legend } from "../legend";
import { LocalErrorWrapper } from "../local-error-wrapper";

const input = cva([
  "flex w-full space-y-2 rounded-lg bg-slate-100 p-2.5 text-slate-900 md:max-w-xl appearance-none focus:outline-none",
  "hover:ring-pink-400 hover:ring-2 focus:ring-pink-400 focus:ring-4",
]);

type Props = {
  legend?: string;
  hint?: string;
  errors?: FieldError[];
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ legend, hint, errors, ...rest }: Props, ref) => (
    <div>
      <Legend legend={legend} hint={hint} />
      <LocalErrorWrapper errors={errors}>
        <div className="flex max-w-xs">
          <input
            ref={ref}
            type="text"
            className={input()}
            {...rest}
            aria-label={legend}
          />
        </div>
      </LocalErrorWrapper>
    </div>
  ),
);
