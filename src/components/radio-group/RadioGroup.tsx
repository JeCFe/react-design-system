import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, UseFormRegister } from "react-hook-form";
import { RadioButton, RadioButtonProps } from "../radio-button";

type FieldError = { message: string };

type RadioOptions<T extends FieldValues> = {
  value: PathValue<T, Path<T>>;
} & Omit<RadioButtonProps, "size">;

type Props<T extends FieldValues> = {
  radioButtons: RadioOptions<T>[];
  defaultValue?: PathValue<T, Path<T>>;
  name: Path<T>;
  register: UseFormRegister<T>;
  legend?: string | ReactNode;
  hint?: string | ReactNode;
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
      {legend && (
        <legend className="text-2xl font-bold tracking-tight text-slate-200">
          {legend}
        </legend>
      )}
      {hint && (
        <div className="text-xl tracking-tight text-slate-300">{hint}</div>
      )}
      {(hint || legend) && <div className="my-4" />}
      <div
        className={errors ? "border-l-2 border-red-600 py-1 pl-4" : undefined}
      >
        {errors && (
          <div className="mb-2 flex flex-row text-lg font-bold text-red-600">
            {errors.map((error) => error.message)}
          </div>
        )}
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
      </div>
    </div>
  );
}
