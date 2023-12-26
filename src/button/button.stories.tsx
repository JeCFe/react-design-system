
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LargePrimary: Story = {
  args: {
   size: "large",
   variant: "primary",
   children: "Large Primary"
  },
};

export const MediumPrimary: Story = {
  args: {
   size: "medium",
   variant: "primary",
   children: "Medium Primary"
  },
};

export const SmallPrimary: Story = {
  args: {
   size: "small",
   variant: "primary",
   children: "Small Primary"
  },
};

export const LargeSecondary: Story = {
  args: {
   size: "large",
   variant: "secondary",
   children: "Large Primary"
  },
};

export const MediumSecondary: Story = {
  args: {
   size: "medium",
   variant: "secondary",
   children: "Medium Secondary"
  },
};

export const SmallSecondary: Story = {
  args: {
   size: "small",
   variant: "secondary",
   children: "Small Secondary"
  },
};

export const UnboundPrimary: Story = {
  args: {
   size: "unbound",
   variant: "primary",
   children: "Unbound Primary"
  },
};

export const UnboundSecondary: Story = {
  args: {
   size: "unbound",
   variant: "secondary",
   children: "Unbound Secondary"
  },
};