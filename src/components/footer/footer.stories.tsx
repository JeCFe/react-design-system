import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { JecfeLogoBlack } from "../react-svg";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Component/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: "Hello there :O",
    logo: <JecfeLogoBlack height="32" />,
  },
};
