import type { Meta } from '@storybook/react'

import Dashboard from '../../components/Main/Dashboard'
import { IUserData } from '../../Interface/IOwner'
import userData from '../assets/userData.json'

const userDataJson: IUserData = JSON.parse(JSON.stringify(userData))

export default {
  title: 'Main/Dashboard',
  component: Dashboard,
  parameters: {
    docs: {
      description: {
        component:
          'Overall dashboard page, where you can search for the owner of a repository.',
      },
    },
    mockData: [
      {
        url: 'https://api.github.com/graphql',
        method: 'POST',
        status: 200,
        response: {
          data: { data: { user: { userDataJson } } },
        },
      },
    ],
  },
  argTypes: {
    userData: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const WithUserData = {
  args: {
    userData: userDataJson,
  },
}

export const WhenUndefined = {
  args: {
    userData: undefined,
  },
}
