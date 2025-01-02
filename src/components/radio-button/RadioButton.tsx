import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const radioCva = cva(
  [
    "appearance-none flex rounded-full border-2 focus:outline-none",
    "after:m-auto after:flex after:content-center after:justify-center after:rounded-full",
    "focus:border-4 focus:ring-4 hover:ring-4",
    "disabled:bg-gray-300",
  ],
  {
    variants: {
      size: {
        small: ["h-8 min-h-8 w-8 min-w-8", "after:h-4 after:w-4"],
        medium: ["h-10 min-h-10 w-10 min-w-10", "after:h-6 after:w-6"],
        large: ["h-12 min-h-12 w-12 min-w-12", "after:h-7 after:w-7"],
      },
      theme: {
        standard:
          "border-black after:checked:bg-pink-400 focus:ring-yellow-400 hover:ring-pink-400",
        dark: "border-slate-400 after:checked:bg-pink-600 focus:ring-yellow-400 hover:ring-pink-600",
        pink: "border-pink-500/80 after:checked:bg-cyan-500/80 focus:ring-yellow-400 hover:ring-cyan-500/80",
        cyan: "border-cyan-500/80 after:checked:bg-pink-500/80 focus:ring-yellow-400 hover:ring-pink-500/80",
      },
    },
    defaultVariants: {
      size: "medium",
      theme: "dark",
    },
  },
);

const label = cva(["flex flex-col font-bold w-fit"], {
  variants: {
    size: {
      medium: "text-base",
      small: "text-sm",
      large: "text-xl",
    },
    darkMode: { true: "text-slate-300", false: "text-black" },
  },
  defaultVariants: { size: "medium", darkMode: true },
});

export type RadioButtonProps = {
  children?: ReactNode;
  className?: string;
  darkMode?: boolean;
  radioClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof radioCva> &
  VariantProps<typeof label>;

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      children,
      size,
      className,
      darkMode,
      theme,
      radioClassName,
      ...rest
    }: RadioButtonProps,
    ref,
  ) => (
    <label className={label({ size, className, darkMode })}>
      <div className="flex flex-row items-center">
        <input
          {...rest}
          className={radioCva({ size, theme, className: radioClassName })}
          ref={ref}
          type="radio"
        />
        <span className="ml-2">{children}</span>
      </div>
    </label>
  ),
);

RadioButton.defaultProps = {
  darkMode: true,
  theme: "standard",
  children: undefined,
  className: "",
};

RadioButton.displayName = "RadioButton";
