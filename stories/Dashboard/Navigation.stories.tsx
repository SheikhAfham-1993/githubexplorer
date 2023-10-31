import type { Meta } from '@storybook/react'

import Navigation from '../../components/Navigation'

export default {
  title: 'Main/Navigation',
  component: Navigation,
  parameters: {
    docs: {
      description: {
        component:
          'The Navigation component where user can enter the name and search for the repository',
      },
    },
  },
} as Meta

export const NavigationComponent = {}
