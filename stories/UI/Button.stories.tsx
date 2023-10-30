import { Meta } from '@storybook/react'
import Button from '../../components/UI/Button'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // foo is the property we want to remove from the UI
    children: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    classNames: {
      table: {
        disable: true,
      },
    },
    dataCy: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Button component upon clicking, will send the request to fetch user data',
      },
    },
  },
} as Meta

export const Basic_Button = {
  args: {
    children: (
      <>
        <MagnifyingGlassIcon className="h-5 w-5" /> Search
      </>
    ),
    onClick: () => {
      console.log('clicked')
    },
    disabled: false,
    classNames:
      'bg-green-600 disabled:bg-green-600/50 px-3 py-1 rounded-lg text-white text-sm font-semibold flex items-center',
  },
}
