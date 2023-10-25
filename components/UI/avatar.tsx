import Image from 'next/image'

type Props = {
  ownerAvatar: string | undefined
}
const Avatar: React.FC<Props> = ({ ownerAvatar }) => {
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
