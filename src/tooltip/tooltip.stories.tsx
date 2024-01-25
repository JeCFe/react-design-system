import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import React, { ComponentProps } from "react";

const meta: Meta<typeof Tooltip> = {
  title: "Component/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: { children: "I am the default" },
};

export const SizeAndTypes: Story = {
  render: () => {
    const types: ComponentProps<typeof Tooltip>["type"][] = [
      "info",
      "warning",
      "danger",
    ];
    const sizes: ComponentProps<typeof Tooltip>["size"][] = [
      "small",
      "medium",
      "large",
    ];
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-4">{size}</h1>
            <div className="flex flex-col space-y-4">
              {types.map((type) => (
                <Tooltip size={size} type={type}>
                  I am type {type} and size {size}
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};