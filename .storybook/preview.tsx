import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/package/ui/providers/theme-provider"
import React from "react";
import "../src/index.css"

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
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
