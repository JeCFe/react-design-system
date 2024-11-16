import type { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { Tooltip } from "./Tooltip";

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

export const Variants: Story = {
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
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
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
