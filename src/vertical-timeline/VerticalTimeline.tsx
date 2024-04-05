import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineProps,
} from "react-vertical-timeline-component";
//@ts-ignore
import React, { ReactNode } from "react";
import "react-vertical-timeline-component/style.min.css";

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
};

export type Props = {
  lineColour: "black" | "white";
  items: TimelineItems[];
  iconStyle?: AcceptedColours;
} & Pick<VerticalTimelineProps, "layout">;

export function Timeline({
  lineColour,
  layout,
  items,
  iconStyle = "pink",
}: Props) {
  return (
    <VerticalTimeline lineColor={lineColour} layout={layout}>
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
          >
            {x.children}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
