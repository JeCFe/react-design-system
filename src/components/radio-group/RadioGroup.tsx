import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, UseFormRegister } from "react-hook-form";
import { FieldError } from "../error-message";
import { Legend } from "../legend";
import { LocalErrorWrapper } from "../local-error-wrapper";
import { RadioButton, RadioButtonProps } from "../radio-button";

type RadioOptions<T extends FieldValues> = {
  value: PathValue<T, Path<T>>;
} & Omit<RadioButtonProps, "size">;

type Props<T extends FieldValues> = {
  radioButtons: RadioOptions<T>[];
  defaultValue?: PathValue<T, Path<T>>;
  name: Path<T>;
  register: UseFormRegister<T>;
  legend?: string;
  hint?: string;
  errors?: FieldError[];
  required?: boolean;
} & Pick<RadioButtonProps, "size">;

export function RadioGroup<T extends FieldValues>({
  radioButtons,
  defaultValue,
  name,
  size,
  legend,
  hint,
  register,
  errors,
  required = false,
}: Props<T>) {
  return (
    <div>
      <Legend legend={legend} hint={hint} />
      <LocalErrorWrapper errors={errors}>
        <div className="space-y-3">
          {radioButtons.map((option, index) => (
            <RadioButton
              {...option}
              {...register(name, {
                required: required && {
                  value: true,
                  message: "A selection is required",
                },
              })}
              key={`${name}.${index}`}
              size={size}
              value={option.value}
              defaultChecked={defaultValue === option.value}
            />
          ))}
        </div>
      </LocalErrorWrapper>
    </div>
  );
}
