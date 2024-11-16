import type { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { Spinner } from "./Spinner";

const sizes: ComponentProps<typeof Spinner>["size"][] = [
  "xsmall",
  "small",
  "medium",
  "large",
];

const meta: Meta<typeof Spinner> = {
  title: "Component/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-row space-x-8">
        {sizes.map((size) => (
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">{size}</h1>
            <div className="flex flex-col space-y-4">
              {[false, true].map((fast) => (
                <Spinner size={size} fast={fast} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
