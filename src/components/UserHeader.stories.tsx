import type { Meta, StoryObj } from '@storybook/react'
import type { UserHeaderProps } from './UserHeader';
import { UserHeader } from './UserHeader'

export default {
  title: 'Components/HeaderUser',
  component: UserHeader,
  args: {
    name: 'Ana Caetano',
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