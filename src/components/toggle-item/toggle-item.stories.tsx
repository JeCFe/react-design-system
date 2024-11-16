import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { ToggleItem } from "./ToggleItem";
const sizes: ComponentProps<typeof ToggleItem>["size"][] = [
  "small",
  "medium",
  "large",
];
const meta: Meta<typeof ToggleItem> = {
  title: "Component/ToggleItem",
  component: ToggleItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleItem>;

export const Default: Story = {
  args: { children: "I am the default" },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
            <div className="flex flex-col space-y-4">
              {[false, true].map((active) => {
                return (
                  <ToggleItem
                    size={size}
                    active={active}
                    onClick={() => console.log("I was clicked", size, active)}
                  >
                    {active ? "active" : "inactive"} {size}
                  </ToggleItem>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
