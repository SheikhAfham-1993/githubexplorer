import Image from 'next/image'

type Props = {
  /** The URL of the avatar image to render. */
  ownerAvatar: string | undefined
}

/**
 * Renders an avatar image based on the provided ownerAvatar prop.
 *
 * @param {Props} ownerAvatar - The URL of the avatar image to render. If not provided, a default avatar image will be used.
 * @return {React.JSX.Element} The rendered avatar image component.
 */
const UserAvatar = ({
  ownerAvatar = '/avatar.svg',
}: Props): React.JSX.Element => {
  return (
    <div className="rounded-full h-16 w-16 md:h-60 md:w-60 lg:h-80 lg:w-80 overflow-hidden border border-gray-400">
      <Image
        data-cy="user-avatar"
        src={ownerAvatar}
        width={400}
        height={400}
        priority={true}
        alt="Picture of the author"
      />
    </div>
  )
}

export default UserAvatar
