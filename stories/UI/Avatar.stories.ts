import { Meta } from '@storybook/react'
import UserAvatar from '../../components/UI/UserAvatar'

export default {
  title: 'UI/UserAvatar',
  component: UserAvatar,
  parameters: {
    docs: {
      description: {
        component:
          'UI component to render an avatar image based on url, change the viewport size to observe the avatar size for different screens',
      },
    },
  },
  argTypes: {
    ownerAvatar: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ownerAvatar: '/avatar.svg',
  },
} as Meta

export const UserC9s = {
  args: {
    ownerAvatar:
      'https://avatars.githubusercontent.com/u/50894?u=40f80ecad369e7af1662b6a18f5ddd09d8af64a7&v=4',
  },
}

export const UserAfham = {
  args: {
    ownerAvatar:
      'https://avatars.githubusercontent.com/u/56600934?u=b837074719a4ffada3b2d5e7d67a1a0d30b13da6&v=4',
  },
}
