import { VariantProps, cva } from "class-variance-authority";

import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const rangeSlider = cva(
  "appearance-none h-3 rounded-full bg-gray-300 accent-pink-500",
  {
    variants: {
      size: {
        small: "w-32",
        medium: "w-64",
        large: "w-96",
        unbound: "w-full",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type Props = {
  label?: ReactNode | ReactNode[];
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> &
  VariantProps<typeof rangeSlider>;

export const RangeSlider = forwardRef<HTMLInputElement, Props>(
  ({ className, size, label = undefined, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-4 flex flex-row font-bold">{label}</label>
        )}
        <input
          ref={ref}
          type="range"
          aria-label="Slider"
          className={rangeSlider({ className, size })}
          {...rest}
        />
      </div>
    );
  },
);
