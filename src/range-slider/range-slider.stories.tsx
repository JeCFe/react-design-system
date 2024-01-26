import React, { ComponentProps } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { RangeSlider } from "./RangeSlider";
const sizes: ComponentProps<typeof RangeSlider>["size"][] = [
  "small",
  "medium",
  "large",
  "unbound",
];

const meta: Meta<typeof RangeSlider> = {
  title: "Component/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: { size: "small" },
};
export const Medium: Story = {
  args: { size: "medium" },
};
export const Large: Story = {
  args: { size: "large" },
};
export const Unbound: Story = {
  args: { size: "unbound" },
};

export const Steps: Story = {
  args: { step: 10 },
};

export const DefaultWithLabel: Story = {
  args: {
    label: "Label",
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
            <div className="flex flex-col space-y-4">
              <RangeSlider size={size} />
              <RangeSlider size={size} disabled />
            </div>
          </div>
        ))}
      </div>
    );
  },
};
