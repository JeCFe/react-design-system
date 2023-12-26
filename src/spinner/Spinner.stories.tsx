import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Component/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {},
};

export const Fast: Story = {
  args: {
    fast: true,
  },
};
