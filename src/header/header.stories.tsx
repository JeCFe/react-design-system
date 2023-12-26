import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import React from "react";

import { Navbar } from "../navbar";
import { Navlink } from "../navbar";

const meta: Meta<typeof Header> = {
  title: "Component/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Title: Story = {
  args: {
    title: "Example title",
  },
};

export const User: Story = {
  args: {
    title: "Example title",
    user: (
      <div className="flex flex-col sm:flex-row divide-x">
        <div className="flex flex-row space-x-4 pr-0 sm:pr-2">
          <p className="flex items-center">Example User</p>

          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <div className="w-14 h-14 rounded-full items-center hidden sm:flex bg-pink-100" />
        </div>

        {/* <Anchor className="pl-0 sm:pl-2 flex items-center" href="#">
          Logout
        </Anchor> */}
      </div>
    ),
  },
};

export const UserAndNavbar: Story = {
  args: {
    title: "Example title",
    user: (
      <div className="flex flex-col sm:flex-row divide-x">
        <div className="flex flex-row space-x-4 pr-0 sm:pr-2">
          <p className="flex items-center">Example User</p>

          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <div className="w-14 h-14 rounded-full items-center hidden sm:flex bg-pink-100" />
        </div>

        {/* <Anchor className="pl-0 sm:pl-2 flex items-center" href="#">
          Logout
        </Anchor> */}
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
