import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { Pill } from "./Pill";

const meta: Meta<typeof Pill> = {
  title: "Component/Pill",
  component: Pill,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: { children: "I am a default pill" },
};

export const Variants: Story = {
  render: () => {
    const types: ComponentProps<typeof Pill>["type"][] = [
      "info",
      "warning",
      "alert",
      "success",
    ];
    const sizes: ComponentProps<typeof Pill>["size"][] = ["medium", "large"];
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
            <div className="flex flex-col space-y-4">
              {types.map((type) => (
                <Pill size={size} type={type}>
                  {type}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
