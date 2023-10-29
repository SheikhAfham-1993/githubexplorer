import { Meta } from '@storybook/react'
import SocialLinks from '../../components/UI/SocialLinks'

export default {
  title: 'UI/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
} as Meta

export const Location = {
  args: {
    icon: 'LOCATION',
    text: 'Mannheim, Germany',
  },
}

export const Youtube = {
  args: {
    icon: 'YOUTUBE',
    text: '@retrogaming9443',
  },
}

export const LinledIn = {
  args: {
    icon: 'LINKEDIN',
    text: '@afham-sheikh',
  },
}

export const Others = {
  args: {
    icon: 'OTHERS',
    text: '@SheikhAfham-1993',
  },
}
