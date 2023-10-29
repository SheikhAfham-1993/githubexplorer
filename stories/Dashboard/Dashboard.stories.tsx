import type { Meta } from '@storybook/react'

import Dashboard from '../../components/Main/Dashboard'
import { IUserData } from '../../Interface/IOwner'

const userData: IUserData = {
  avatarUrl:
    'https://avatars.githubusercontent.com/u/56600934?u=b837074719a4ffada3b2d5e7d67a1a0d30b13da6&v=4',
  name: 'Afham',
  login: 'SheikhAfham-1993',
  followers: {
    totalCount: 0,
  },
  following: {
    totalCount: 0,
  },
  bio: 'Front End Developer @ Mara Solutions\r\nFull stack Nerd. \r\nData analysis lover.',
  socialAccounts: {
    nodes: [
      {
        provider: 'YOUTUBE',
        displayName: '@retrogaming9443',
      },
      {
        provider: 'LINKEDIN',
        displayName: 'in/afham-sheikh',
      },
    ],
  },
  location: 'Mannheim, Germany',
  company: 'Mara Solutions',
  repositories: {
    nodes: [
      {
        forkCount: 10,
        stargazerCount: 10,
        pushedAt: new Date('2020-12-07T00:12:43Z'),
        name: 'WDI-Project',
        url: 'https://github.com/adehaan/WDI-Project',
        visibility: 'PUBLIC',
        description: 'Web Data Integration Project',
        languages: {
          nodes: [
            {
              name: 'Python',
            },
            {
              name: 'Jupyter Notebook',
            },
            {
              name: 'Java',
            },
          ],
        },
      },
      {
        forkCount: 10,
        stargazerCount: 20,
        pushedAt: new Date('2023-10-16T10:28:46Z'),
        name: 'SheikhAfham-1993',
        url: 'https://github.com/SheikhAfham-1993/SheikhAfham-1993',
        visibility: 'PUBLIC',
        description: undefined,
        languages: {
          nodes: [],
        },
      },
      {
        forkCount: 30,
        stargazerCount: 40,
        pushedAt: new Date('2023-10-28T17:03:08Z'),
        name: 'githubexplorer',
        url: 'https://github.com/SheikhAfham-1993/githubexplorer',
        visibility: 'PUBLIC',
        description:
          'Next js application to explore the repositories of a user',
        languages: {
          nodes: [
            {
              name: 'CSS',
            },
            {
              name: 'TypeScript',
            },
            {
              name: 'JavaScript',
            },
            {
              name: 'MDX',
            },
          ],
        },
      },
    ],
  },
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Main/Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', height: 'fullscreen' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithUserData = {
  args: {
    userData,
  },
}

export const WhenUndefined = {
  args: {
    userData: undefined,
  },
}
