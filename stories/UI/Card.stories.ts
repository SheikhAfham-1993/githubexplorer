import { Meta } from '@storybook/react'
import Card from '../../components/UI/Card'

const repo_c9s = {
  forkCount: 10,
  stargazerCount: 20,
  pushedAt: '2011-02-13T15:01:40Z',
  name: 'git-local',
  url: 'https://github.com/c9s/git-local',
  visibility: 'PUBLIC',
  description: null,
  languages: {
    nodes: [],
  },
}
const repo_afham = {
  forkCount: 30,
  stargazerCount: 40,
  pushedAt: '2023-10-28T18:26:58Z',
  name: 'githubexplorer',
  url: 'https://github.com/SheikhAfham-1993/githubexplorer',
  visibility: 'PUBLIC',
  description: 'Next js application to explore the repositories of a user',
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
}

const postModern = {
  forkCount: 0,
  stargazerCount: 0,
  pushedAt: '2012-04-25T01:33:44Z',
  name: 'scm',
  url: 'https://github.com/postmodern/scm',
  visibility: 'PUBLIC',
  description: 'Ruby interface to common SCMs',
  languages: {
    nodes: [
      {
        name: 'Ruby',
      },
    ],
  },
}

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'UI Component to show the repository detail as a card',
      },
    },
  },
  argTypes: {
    repo: {
      options: ['c9s', 'afham', 'postModern'],
      mapping: {
        c9s: repo_c9s,
        afham: repo_afham,
        postModern: postModern,
      },
    },
  },
} as Meta

export const Example_c9s = {
  args: {
    repo: repo_c9s,
  },
}

export const Example_Afham = {
  args: {
    repo: repo_afham,
  },
}
