import React from "react";

type Props = { legend?: string; hint?: string };
export function Legend({ legend, hint }: Props) {
  return (
    <span>
      {legend && (
        <legend className="text-2xl font-bold tracking-tight text-slate-200">
          {legend}
        </legend>
      )}
      {hint && (
        <div className="text-xl tracking-tight text-slate-300">{hint}</div>
      )}
      {(hint || legend) && <div className="my-4" />}
    </span>
  );
}
