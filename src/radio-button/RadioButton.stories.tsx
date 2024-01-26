import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "./RadioButton";
import React, { ComponentProps } from "react";

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

export const Hint: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-4">{size}</h1>
            <div className="flex flex-col space-y-4">
              <RadioButton size={size} hint={`${size} with a hint`}>
                {size} radio button
              </RadioButton>
            </div>
          </div>
        ))}
      </div>
    );
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
