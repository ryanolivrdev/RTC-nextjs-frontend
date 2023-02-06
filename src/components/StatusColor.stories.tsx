import type { Meta, StoryObj } from '@storybook/react'
import type { UserHeaderProps } from './UserHeader';
import { StatusColor } from './StatusColor';

export default {
  title: 'Components/StatusColor',
  component: StatusColor,
  args: {
    status: 'online',
  },
  argTypes: {
    status: {
      options: ['online', 'away', 'offline'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<UserHeaderProps>

export const Default: StoryObj<UserHeaderProps> = {}