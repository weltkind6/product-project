import type {Meta, StoryObj} from '@storybook/react';
import {Button, ThemeButton} from "shared/ui/Button/Button";

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.PRIMARY
    },
};

export const Outlined: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINED,
    },
};
