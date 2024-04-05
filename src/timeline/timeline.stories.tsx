import type { Meta, StoryObj } from "@storybook/react";

import React, { ComponentProps } from "react";
import { Button } from "../button/Button";
import { Pill } from "../pill/Pill";
import { Timeline } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Component/Timeline",
  component: Timeline,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Basic: Story = {
  render: () => {
    return (
      <Timeline
        lineColour="black"
        items={[
          {
            children: (
              <div>
                <h3 className="text-xl font-bold">Header</h3>
                <h4 className="text-lg">Subtitle</h4>
                <p>This is where the bulk of the content could goes</p>
              </div>
            ),
          },
          {
            children: (
              <div>
                <h3 className="text-xl font-bold">Header</h3>
                <h4 className="text-lg">Subtitle</h4>
                <p>This is where the bulk of the content could goes</p>
              </div>
            ),
          },
        ]}
      />
    );
  },
};

export const ProjectExample: Story = {
  render: () => {
    return (
      <Timeline
        lineColour="black"
        items={[
          {
            children: (
              <div>
                <div className="space-x-3 pb-2">
                  <Pill size="medium" type="info">
                    React
                  </Pill>
                  <Pill size="medium" type="info">
                    TypeScript
                  </Pill>
                  <Pill size="medium" type="info">
                    Jest
                  </Pill>
                </div>
                <h3 className="text-xl font-bold">Example React Project</h3>
                <h4 className="text-lg">Todo list</h4>
                <div className="space-y-4">
                  <p>This is where the bulk of the content could goes</p>
                  <div className="flex space-x-4">
                    <Button variant="primary">Website</Button>
                    <Button variant="primary">Github</Button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            children: (
              <div>
                <div className="space-x-3 pb-2">
                  <Pill size="medium" type="info">
                    React
                  </Pill>
                  <Pill size="medium" type="info">
                    TypeScript
                  </Pill>
                  <Pill size="medium" type="info">
                    Jest
                  </Pill>
                </div>
                <h3 className="text-xl font-bold">Example React Project</h3>
                <h4 className="text-lg">Todo list</h4>
                <div className="space-y-4">
                  <p>This is where the bulk of the content could goes</p>
                  <div className="flex space-x-4">
                    <Button variant="primary">Website</Button>
                    <Button variant="primary">Github</Button>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    );
  },
};
