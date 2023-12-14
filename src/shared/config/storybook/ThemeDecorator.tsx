import React from "react";
import { Decorator } from '@storybook/react';

export const ThemeDecorator: Decorator = (Story) => {
    return (
        <div style={{color: 'lightgreen'}}>
            <Story />
        </div>
    )
}
