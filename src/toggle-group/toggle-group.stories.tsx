import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { ToggleGroup } from ".";
import { ToggleItem } from "../toggle-item";
const sizes: ComponentProps<typeof ToggleItem>["size"][] = [
  "small",
  "medium",
  "large",
];

const meta: Meta<typeof ToggleGroup> = {
  title: "Component/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const MultiSelect: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8 ">
        {[true, false].map((multiSelect) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">
              {multiSelect ? "Multi select" : "Single select"}
            </h1>
            <div className="flex flex-col space-y-4">
              {sizes.map((size) => {
                return (
                  <ToggleGroup multiSelect={multiSelect} size={size}>
                    <ToggleItem onClick={() => console.log("I was clicked")}>
                      <p className="font-bold">B</p>
                    </ToggleItem>
                    <ToggleItem className="italic">I</ToggleItem>
                    <ToggleItem className="underline">U</ToggleItem>
                  </ToggleGroup>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
