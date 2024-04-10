import { cva } from "class-variance-authority";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { InView } from "react-intersection-observer";
import "../../css/VerticalTimelineElement.css";

const elementPosition = cva("vertical-timeline-element", {
  variants: {
    left: { true: "vertical-timeline-element--left" },
    right: { true: "vertical-timeline-element--right" },
    children: { true: "vertical-timeline-element--no-children" },
  },
});

export interface VerticalTimelineElementProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  contentArrowStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  date?: React.ReactNode;
  dateClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  iconOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onTimelineElementClick?: (event: React.MouseEvent<HTMLElement>) => void;
  iconStyle?: React.CSSProperties;
  id?: string;
  position?: "left" | "right";
  style?: React.CSSProperties;
  textClassName?: string;
  visible?: boolean;
  shadowSize?: "small" | "medium" | "large";
}

export function VerticalTimelineElement({
  children = "",
  className = "",
  contentArrowStyle = undefined,
  contentStyle = undefined,
  date = "",
  dateClassName = "",
  icon = undefined,
  iconClassName = "",
  iconOnClick = undefined,
  onTimelineElementClick = undefined,
  iconStyle = undefined,
  id = "",
  position = undefined,
  style = undefined,
  textClassName = "",
  visible = false,
  shadowSize = "small", // small | medium | large
  
  
}: VerticalTimelineElementProps) {
  return (
    <InView triggerOnce rootMargin="0px 0px -40px 0px" >
      {({ inView, ref }) => (
        <div
          ref={ref}
          id={id}
          className={elementPosition({
            className,
            left: position === "left",
            right: position === "right",
            children: children === "",
          })}
          style={style}
        >
          <React.Fragment>
            <span // eslint-disable-line jsx-a11y/no-static-element-interactions
              style={iconStyle}
              onClick={iconOnClick}
              className={classNames(
                iconClassName,
                "vertical-timeline-element-icon",
                `shadow-size-${shadowSize}`, // for shadow size
                {
                  "bounce-in": inView || visible,
                  "is-hidden": !(inView || visible),
                },
              )}
            >
              {icon}
            </span>
            <div
              style={contentStyle}
              onClick={onTimelineElementClick}
              className={classNames(
                textClassName,
                "vertical-timeline-element-content",
                {
                  "bounce-in": inView || visible,
                  "is-hidden": !(inView || visible),
                },
              )}
            >
              <div
                style={contentArrowStyle}
                className="vertical-timeline-element-content-arrow"
              />
              {children}
              <span
                className={classNames(
                  dateClassName,
                  "vertical-timeline-element-date",
                )}
              >
                {date}
              </span>
            </div>
          </React.Fragment>
        </div>
      )}
    </InView>
  );
}

VerticalTimelineElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentArrowStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  date: PropTypes.node,
  dateClassName: PropTypes.string,
  icon: PropTypes.element,
  iconClassName: PropTypes.string,
  iconOnClick: PropTypes.func,
  onTimelineElementClick: PropTypes.func,
  iconStyle: PropTypes.object,
};
