import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Component/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

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
