import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import {Button} from "../components";

const meta: Meta<typeof Button> = {
    title: 'Button',
    tags: ['autodocs'],
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'Test Story',
    render: () => <Button label="Button" />,
};