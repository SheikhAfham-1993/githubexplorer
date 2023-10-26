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
const Avatar = ({ ownerAvatar }: Props): React.JSX.Element => {
  return (
    <Image
      src={ownerAvatar ?? '/avatar.svg'}
      width={400}
      height={400}
      priority={true}
      alt="Picture of the author"
    />
  )
}

export default Avatar
