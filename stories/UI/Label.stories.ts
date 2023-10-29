import { Meta } from '@storybook/react'
import Label from '../../components/UI/Label'

export default {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    // foo is the property we want to remove from the UI
    className: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} as Meta

export const GithubExplorer = {
  args: {
    className: 'font-semibold text-sm hover:bg-gray-200 px-3 py-1 rounded-lg',
    text: 'Github Explorer',
  },
}

export const UserAfham = {
  args: {
    className: 'text-2xl font-semibold',
    text: 'Sheikh Afham',
  },
}

export const NoRepoFound = {
  args: {
    className:
      'pb-5 text-lg font-bold flex flex-col justify-center items-center text-black flex-grow h-full',
    text: 'No repositories found',
  },
}
