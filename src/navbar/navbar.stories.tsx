import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Navbar } from "./Navbar";
import { Navlink } from "./Navlink";

const meta: Meta<typeof Navbar> = {
  title: "Component/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
  args: {
    children: (
      <div>
        <Navlink>Link 1</Navlink>
        <Navlink>Link 2</Navlink>
        <Navlink>Link 3</Navlink>
      </div>
    ),
  },
};
