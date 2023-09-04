import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const data = {
  name: "John Doe",
  title: "Software Engineer",
  image: "https://avatars.githubusercontent.com/u/25126281?v=4",
};

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ...data,
    backgroundColor: "blue",
    textColor: "white",
  },
};

export const Dark: Story = {
  args: {
    ...data,
    backgroundColor: "black",
    textColor: "white",
  },
};


