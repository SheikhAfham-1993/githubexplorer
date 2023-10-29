import Image from 'next/image'
type Props = {
  icon: string
}
const SocialIcons = ({ icon }: Props): React.JSX.Element => {
  let iconSvg: string = ''
  switch (icon.toLowerCase()) {
    case 'location':
      iconSvg = '/location.svg'
      break
    case 'youtube':
      iconSvg = '/youtube.svg'
      break
    case 'linkedin':
      iconSvg = '/linkedIn.svg'
      break
    case 'website':
      iconSvg = '/website.svg'
      break
    default:
      iconSvg = '/global.svg'
      break
  }

  return (
    <Image src={iconSvg} width={18} height={18} alt={icon} loading="lazy" />
  )
}

export default SocialIcons
