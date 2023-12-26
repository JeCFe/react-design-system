import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, Props } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Component/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    openTitle: "Open me",
    closeTitle: "Close me",
    children: ":O gosh can't get any privacy!!",
  },
};
