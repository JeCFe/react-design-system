import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Component/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const MediumChecked: Story = {
  args: {
    checked: true,
    children: "Medium checked",
  },
};

export const MediumUnchecked: Story = {
  args: {
    children: "Medium unchecked",
  },
};

export const MediumCheckedWithHint: Story = {
  args: {
    checked: true,
    children: "Medium checked with hint",
    hint: "Medium checked hint",
  },
};

export const SmallChecked: Story = {
  args: {
    size: "small",
    checked: true,
    children: "Small checked",
  },
};

export const SmallUnchecked: Story = {
  args: {
    children: "Medium unchecked",
    size: "small",
  },
};

export const SmallCheckedWithHint: Story = {
  args: {
    size: "small",
    children: "Small checked with hint",
    hint: "Small checked hint",
  },
};
