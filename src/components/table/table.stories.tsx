import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Component/Table",
  component: Table,
  tags: ["autodocs"],
};

const data: { col1: string; col2: string }[] = [
  { col1: "Column 1 Row 1", col2: "Column 2 Row 1" },
  { col1: "Column 1 Row 2", col2: "Column 2 Row 2" },
];

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    return (
      <Table caption="This is an example table">
        <thead>
          <tr>
            <th>Bookshelf</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => (
            <tr key={index}>
              <td>{x.col1}</td>
              <td>{x.col2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  },
};
