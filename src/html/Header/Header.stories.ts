import type { Meta, StoryObj } from '@storybook/html';
import type { HeaderProps } from './Header';
import { createHeader } from './Header';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta = {
  title: 'Example/Header 2',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/html/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => createHeader(args),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/html/configure/story-layout
    // layout: 'fullscreen',
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<HeaderProps>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
