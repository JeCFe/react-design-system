import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { MarkdownEditor } from "./MarkdownEditor";

const meta: Meta<typeof MarkdownEditor> = {
  title: "Component/MarkdownEditor",
  component: MarkdownEditor,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {
  args: {},
};
