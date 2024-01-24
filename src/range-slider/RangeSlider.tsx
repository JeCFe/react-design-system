// @ts-ignore
import React, { InputHTMLAttributes, ReactNode, useState } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { ChangeEvent, forwardRef } from "react";

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
  }
);

type Props = {
  onVolumeChange: (volume: number) => void;
  min?: number;
  max?: number;
  label?: ReactNode | ReactNode[];
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof rangeSlider>;

export const RangeSlider = forwardRef<HTMLInputElement, Props>(
  (
    {
      onVolumeChange,
      className,
      size,
      min = 0,
      max = 100,
      label = undefined,
      ...rest
    },
    ref
  ) => {
    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newRange = Number.parseInt(event.target.value);

      onVolumeChange(newRange);
    };
    return (
      <div className="flex flex-col">
        {label && (
          <label className="flex flex-row font-bold mb-4">{label}</label>
        )}
        <input
          ref={ref}
          {...rest}
          type="range"
          min={min}
          max={max}
          onChange={handleVolumeChange}
          className={rangeSlider({ className, size })}
        />
      </div>
    );
  }
);
