import { Meta } from '@storybook/react'
import Card from '../../components/UI/Card'
import repo_afham from '../assets/repo_afham.json'
import repo_c9s from '../assets/repo_c9s.json'
import repo_modern from '../assets/repo_modern.json'

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
        postModern: repo_modern,
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
