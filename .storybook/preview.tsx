import type { Preview } from "@storybook/react";
import React from "react";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#0f172a" },
        { name: "Light", value: "#f1f5f9" },
      ],
      default: "Dark",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default preview;
