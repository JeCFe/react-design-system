import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { legend: "Legend/Label", hint: "This is a hint" },
};
