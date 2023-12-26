import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Component/Anchor",
  component: Anchor,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Basic: Story = {
  args: {
    children: "I am a styled a tag",
  },
};
