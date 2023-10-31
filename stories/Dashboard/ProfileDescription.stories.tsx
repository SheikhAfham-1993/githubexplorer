import type { Meta } from '@storybook/react'
import { IUserData } from '../../Interface/IOwner'
import ProfileDescription from '../../components/Bio/ProfileDescription'
import userData from '../assets/userData.json'

const userDataJson: IUserData = JSON.parse(JSON.stringify(userData))

const withoutSocialLinks: IUserData = {
  ...userDataJson,
  socialAccounts: {
    nodes: undefined,
  },
}

const withoutLocation: IUserData = {
  ...userDataJson,
  location: undefined,
}

const NoBioData: IUserData = {
  ...userDataJson,
  bio: undefined,
}

const NoNameData: IUserData = {
  ...userDataJson,
  name: undefined,
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Main/ProfileDescription',
  component: ProfileDescription,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The profile description section where all the data related to the owner is displayed',
      },
    },
  },
} as Meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithUserData = {
  args: {
    userData,
  },
}

export const NoName = {
  args: {
    userData: NoNameData,
  },
}

export const NoBio = {
  args: {
    userData: NoBioData,
  },
}

export const WithoutSocialLinks = {
  args: {
    userData: withoutSocialLinks,
  },
}

export const WithoutLocation = {
  args: {
    userData: withoutLocation,
  },
}
