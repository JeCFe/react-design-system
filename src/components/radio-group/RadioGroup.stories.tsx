import type { Meta, StoryObj } from "@storybook/react";
import React, { ComponentProps } from "react";

import { useForm } from "react-hook-form";
import { Button } from "../button";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Component/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

type Values = {
  radio: "abc" | "dfg";
};

export const Default: Story = {
  render: () => {
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<Values>();
    const onSubmit = (x: Values) => {
      console.log(x);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <RadioGroup<Values>
          required
          legend="Select option"
          hint="Choose an option"
          register={register}
          radioButtons={[
            { children: "Test", theme: "dark", value: "abc" },
            { children: "Test 2", theme: "dark", value: "dfg" },
          ]}
          defaultValue={undefined}
          name={"radio"}
          size="medium"
          errors={
            errors.radio && errors.radio.message
              ? [{ message: errors.radio.message }]
              : undefined
          }
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  },
};
