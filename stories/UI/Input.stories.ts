import { Meta } from '@storybook/react'
import Input from '../../components/UI/Input'

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'UI component to render Input control',
      },
    },
  },
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    onKeyDown: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
    value: {
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
  args: {
    placeholder: 'input control',
  },
} as Meta

export const Input_Empty = {
  args: {
    width: 'w-[200px]',
    value: '',
  },
}

export const Input_SearchRepo = {
  args: {
    width: 'w-[200px]',
    value: 'WDI',
  },
}

export const Input_SearchUser = {
  args: {
    width: 'w-3/4',
    value: 'sheikhafham-1993',
  },
}
