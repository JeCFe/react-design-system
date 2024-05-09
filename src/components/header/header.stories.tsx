import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Header } from "./Header";

import { Navbar, Navlink } from "../navbar";
import { JecfeLogo } from "../react-svg";

const meta: Meta<typeof Header> = {
  title: "Component/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Example title",
  },
};

export const WithLogo: Story = {
  args: {
    title: "Example title",
    logo: <JecfeLogo height="48" />,
  },
};

export const User: Story = {
  args: {
    title: "Example title",
    user: (
      <div className="flex flex-col divide-x sm:flex-row">
        <div className="flex flex-row space-x-4 pr-0 sm:pr-2">
          <p className="flex items-center">Example User</p>
          <div className="hidden h-14 w-14 items-center rounded-full bg-pink-100 sm:flex" />
        </div>
      </div>
    ),
  },
};

export const UserAndNavbar: Story = {
  args: {
    title: "Example title",
    user: (
      <div className="flex flex-col divide-x sm:flex-row">
        <div className="flex flex-row space-x-4 pr-0 sm:pr-2">
          <p className="flex items-center">Example User</p>
          <div className="hidden h-14 w-14 items-center rounded-full bg-pink-100 sm:flex" />
        </div>
      </div>
    ),
    navbar: (
      <Navbar>
        <Navlink>Example One</Navlink>
        <Navlink>Example Three</Navlink>
        <Navlink>Example Four</Navlink>
        <Navlink>Example Five</Navlink>
        <Navlink>Example Six</Navlink>
      </Navbar>
    ),
  },
};
