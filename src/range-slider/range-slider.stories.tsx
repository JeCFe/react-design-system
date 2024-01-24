import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { RangeSlider } from "./RangeSlider";

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
