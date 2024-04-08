import classNames from "classnames";

import React from "react";

import "../../css/VerticalTimeline.css";

export type VerticalTimelineProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  lineColor?: string;
};

export function VerticalTimeline({
  children,
  className = "",
  lineColor = "#FFF",
}: VerticalTimelineProps) {
  if (typeof window === "object") {
    document.documentElement.style.setProperty("--line-color", lineColor);
  }
  return (
    <div
      className={classNames(
        className,
        "vertical-timeline vertical-timeline--two-columns vertical-timeline--animate",
      )}
    >
      {children}
    </div>
  );
}
