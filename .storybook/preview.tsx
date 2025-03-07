
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/package/ui/providers/theme-provider"
import { withThemeByClassName } from "@storybook/addon-themes";
import React from "react";
import "../src/index.css";

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
     },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => {
      return (
        <ThemeProvider defaultTheme="light">
          <Story />
        </ThemeProvider>
      )
    }
  ]
};

export default preview;
