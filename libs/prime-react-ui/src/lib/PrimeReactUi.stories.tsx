import type { Meta, StoryObj } from "@storybook/react";
import { PrimeReactUi } from "./PrimeReactUi";

const meta: Meta<typeof PrimeReactUi> = {
    component: PrimeReactUi,
    title: "PrimeReactUi",
};
export default meta;
type Story = StoryObj<typeof PrimeReactUi>;

export const Primary: Story = {
    args: { title: "PrimeReactUi" },
};
