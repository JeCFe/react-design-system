//@ts-ignore
import React, { ReactNode } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "../../lib";

type AcceptedColours = "blue" | "yellow" | "red" | "green" | "pink";

var colours: { [key in AcceptedColours]: string } = {
  yellow: "rgb(254 240 138)",
  blue: "rgb(191 219 254)",
  red: "rgb(254 202 202)",
  pink: "rgb(251 207 232)",
  green: "rgb(187 247 208)",
};

export type TimelineItems = {
  children: ReactNode;
  date?: string;
  icon?: ReactNode;
  textClassName?:string;
  className?:string;
  iconClassName?: string;
};

export type Props = {
  lineColour: "black" | "white";
  items: TimelineItems[];
  iconStyle?: AcceptedColours;
  
};

export function Timeline({ lineColour, items, iconStyle = "pink" }: Props) {
  return (
    <VerticalTimeline lineColor={lineColour}>
      {items.map((x, index) => {
        return (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "rgb(229 231 235)", color: "black" }}
            contentArrowStyle={{ borderRight: `7px solid rgb(229 231 235)` }}
            date={x.date}
            iconStyle={{
              background: colours[iconStyle],
            }}
            icon={x.icon}
            textClassName={x.textClassName}
            iconClassName={x.iconClassName}
            className={x.className}
          >
            {x.children}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
