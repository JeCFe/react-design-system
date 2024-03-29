import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { Button } from "./Button";

const sizes: ComponentProps<typeof Button>["size"][] = [
  "small",
  "medium",
  "large",
];
const variants: ComponentProps<typeof Button>["variant"][] = [
  "primary",
  "secondary",
  "destructive",
];

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
            <div className="flex flex-col space-y-4">
              {variants.map((variant) => (
                <Button size={size} variant={variant}>
                  {size} {variant}
                </Button>
              ))}
              {variants.map((variant) => (
                <Button size={size} variant={variant} isLoading={true}>
                  {size} {variant}
                </Button>
              ))}
              {variants.map((variant) => (
                <Button size={size} variant={variant} disabled>
                  {size} {variant} disabled
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
