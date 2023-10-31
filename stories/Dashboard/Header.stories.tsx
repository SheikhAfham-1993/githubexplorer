import type { Meta } from '@storybook/react'

import Header from '../../components/Main/Header'

export default {
  title: 'Main/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'The header component',
      },
    },
  },
} as Meta

export const SimpleHeader = {}
