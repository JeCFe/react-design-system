import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import React, { ComponentProps } from "react";

const sizes: ComponentProps<typeof Checkbox>["size"][] = ["small", "medium"];

const meta: Meta<typeof Checkbox> = {
  title: "Component/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Default checkbox",
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-4">{size}</h1>
            <div className="flex flex-col space-y-4">
              {[true, false].map((checked) => {
                return (
                  <Checkbox size={size} checked={checked}>
                    {size} {checked ? "checked" : "unchecked"}
                  </Checkbox>
                );
              })}
              <Checkbox size={size} disabled>
                {size} disabled
              </Checkbox>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
