// @ts-ignore
import React, { ReactNode } from "react";
import { ErrorMessage, FieldError } from "../error-message";

type Props = {
  children: ReactNode;
  errors: FieldError[] | undefined;
};
export function LocalErrorWrapper({ errors, children }: Props) {
  return (
    <div
      className={
        errors ? "space-y-2 border-l-2 border-red-600 py-1 pl-4" : undefined
      }
    >
      <ErrorMessage errors={errors} />
      {children}
    </div>
  );
}
