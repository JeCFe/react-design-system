import type { Meta, StoryObj } from "@storybook/react";
import React, { ComponentProps } from "react";

import { RadioButton } from "./RadioButton";

const sizes: ComponentProps<typeof RadioButton>["size"][] = ["small", "medium"];

const meta: Meta<typeof RadioButton> = {
  title: "Component/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { children: "Radio Button" },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
            <div className="flex flex-col space-y-4">
              {[true, false].map((checked) => {
                return (
                  <RadioButton size={size} checked={checked}>
                    {size} {checked ? "checked" : "unchecked"}
                  </RadioButton>
                );
              })}
              <RadioButton size={size} disabled>
                {size} disabled
              </RadioButton>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
