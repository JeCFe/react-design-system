import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const radio = cva(
  [
    "appearance-none flex rounded-full border-2 border-black focus:outline-none",
    "after:m-auto after:flex after:content-center after:justify-center after:rounded-full after:checked:bg-pink-400",
    "focus:border-4 focus:ring focus:ring-pink-400",
    "disabled:bg-gray-300",
  ],
  {
    variants: {
      size: {
        small: ["h-8 min-h-8 w-8 min-w-8", "after:h-4 after:w-4"],
        medium: ["h-10 min-h-10 w-10 min-w-10", "after:h-6 after:w-6"],
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

const label = cva(["flex flex-col"], {
  variants: { size: { medium: "text-lg", small: "text-base" } },
  defaultVariants: { size: "small" },
});

const hints = cva("text-gray-500", {
  variants: { size: { small: "ml-10", medium: "ml-12" } },
});

type Props = {
  children?: ReactNode;
  hint?: ReactNode;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof radio>;

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  ({ children, hint, size, className, ...rest }: Props, ref) => (
    <label className={label({ size, className })}>
      {hint && <span className={hints({ size })}>{hint}</span>}
      <div className="flex flex-row items-center">
        <input {...rest} className={radio({ size })} ref={ref} type="radio" />
        <span className="ml-2">{children}</span>
      </div>
    </label>
  ),
);

RadioButton.defaultProps = {
  hint: undefined,
  children: undefined,
  className: "",
};

RadioButton.displayName = "RadioButton";
