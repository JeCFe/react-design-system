import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps, useRef } from "react";
import { TextArea } from "./TextArea";

const widths: ComponentProps<typeof TextArea>["width"][] = [
  "medium",
  "large",
  "full",
];
const heights: ComponentProps<typeof TextArea>["height"][] = [
  "small",
  "medium",
  "large",
  "full",
];

const borders: ComponentProps<typeof TextArea>["border"][] = ["bottom", "full"];

const meta: Meta<typeof TextArea> = {
  title: "Component/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex w-full flex-row space-x-8">
        {widths.map((width) => (
          <div className="flex w-full flex-col">
            <h1 className="pb-4 text-xl font-bold">{width}</h1>
            <div className="flex w-full flex-col space-y-4">
              <TextArea
                border="bottom"
                width={width}
                placeholder="Underline border"
              />
              <TextArea autoGrow width={width} placeholder={`${width} grow`} />
              <TextArea
                width={width}
                placeholder={`${width} disabled`}
                disabled
              />

              {heights.map((height) => {
                return (
                  <TextArea
                    width={width}
                    height={height}
                    placeholder={`${width} ${height}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
