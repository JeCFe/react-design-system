import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

export const checkboxCva = cva(
  [
    "appearance-none box-border relative border-2",
    "focus:before:absolute focus:before:-left-0.5 focus:before:-top-0.5 focus:before:border-4 focus:before:ring",
    "checked:after:absolute checked:after:box-border checked:after:rotate-45 checked:after:border-solid",
    "disabled:bg-gray-300 hover:ring-2",
  ],
  {
    variants: {
      size: {
        small: [
          "h-8 min-h-8 w-8 min-w-8",
          "focus:before:h-8 focus:before:w-8",
          "checked:after:left-2 checked:after:top-[1px] checked:after:h-[20px] checked:after:w-3 checked:after:border-b-[5px] checked:after:border-r-[5px]",
        ],
        medium: [
          "h-10 min-h-10 w-10 min-w-10",
          "focus:before:h-10 focus:before:w-10",
          "checked:after:left-3 checked:after:top-[3px] checked:after:h-[25px] checked:after:w-3 checked:after:border-b-[5px] checked:after:border-r-[5px]",
        ],
        large: [
          "h-12 min-h-12 w-12 min-w-12",
          "focus:before:h-12 focus:before:w-12",
          "checked:after:left-4 checked:after:top-[5px] checked:after:h-[30px] checked:after:w-3 checked:after:border-b-[5px] checked:after:border-r-[5px]",
        ],
      },
      theme: {
        standard:
          "bg-white border-slate-900 focus:before:border-slate-900 after:checked:border-pink-400 focus:before:ring-yellow-400 hover:ring-pink-400",
        dark: "border-slate-400 focus:before:border-slate-400 after:checked:border-pink-400 focus:before:ring-yellow-400 hover:ring-pink-400",
        pink: "border-pink-500 focus:before:border-pink-500 after:checked:border-cyan-500 focus:before:ring-yellow-400 hover:ring-pink-500",
        cyan: "border-cyan-500 focus:before:border-cyan-500 after:checked:border-pink-500 focus:before:ring-yellow-400 hover:ring-cyan-500",
      },
    },
    defaultVariants: {
      size: "small",
      theme: "dark",
    },
  },
);

const label = cva(["flex flex-col w-fit"], {
  variants: {
    size: { medium: "text-lg", small: "text-base", large: "text-xl" },
    darkMode: {
      standard: "text-slate-800",
      dark: "text-slate-300",
    },
  },
  defaultVariants: { size: "small", darkMode: "dark" },
});

type Props = {
  children?: ReactNode;
  hint?: ReactNode;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof checkboxCva> &
  VariantProps<typeof label>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ children, size, className, theme, darkMode, ...rest }: Props, ref) => (
    <label className={label({ size, className, darkMode })}>
      <div className="flex w-fit flex-row items-center">
        <input
          {...rest}
          className={checkboxCva({ size, theme })}
          ref={ref}
          type="checkbox"
        />
        <span className="ml-4">{children}</span>
      </div>
    </label>
  ),
);

Checkbox.defaultProps = {
  hint: undefined,
  children: undefined,
  className: "",
};

Checkbox.displayName = "Checkbox";
