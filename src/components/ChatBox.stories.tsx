import type { Meta, StoryObj } from '@storybook/react'
import type { ChatBoxProps } from './ChatBox';
import { ChatBox } from './ChatBox';

const currDate = new Date();

export default {
  title: 'Components/ChatBox',
  component: ChatBox,
  args: {
    userName: 'Joe Doe',
    message: 'Lorem ipsum.',
    mode: 'receiving',
    time: `${currDate.getHours()}:${currDate.getMinutes()}`,
  },
  argTypes: {
    mode: {
      options: ['receiving', 'sending'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ChatBoxProps>

export const Default: StoryObj<ChatBoxProps> = {}

export const Receiving: StoryObj<ChatBoxProps> = {
  args: {
    mode: 'receiving',
  }
}

export const Sending: StoryObj<ChatBoxProps> = {
  args: {
    mode: 'sending',
  }
}