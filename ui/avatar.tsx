import Image from 'next/image'

const Avatar = () => {
  return (
    <img
      src={'/avatar.svg'}
      alt="Picture of the author"
      className="rounded-full w-12 h-12 md:w-50 md:h-50"
    />
  )
}

export default Avatar
