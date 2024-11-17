import React from "react";

export type FieldError = { message: string };
type Props = {
  errors: FieldError[] | undefined;
};
export function ErrorMessage({ errors }: Props) {
  return (
    <>
      {errors && (
        <div className="flex flex-row text-lg font-bold text-red-600">
          {errors.map((error) => error.message)}
        </div>
      )}
    </>
  );
}
