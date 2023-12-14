import {Preview} from "@storybook/react";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [ThemeDecorator],
};
export default preview;
