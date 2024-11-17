import { cva } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./table.module.css";

const table = cva(`${styles.table}`);

type Props = {
  caption?: ReactNode;
  children?: ReactNode | ReactNode[];
} & HTMLAttributes<HTMLTableElement>;

export function Table({ caption, children, className, ...props }: Props) {
  return (
    <table className={table({ className })} {...props}>
      {caption && <caption className="mb-2">{caption}</caption>}
      {children}
    </table>
  );
}
