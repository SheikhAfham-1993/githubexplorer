import Image from 'next/image'
type Props = {
  icon: string
}
const SocialIcons = ({ icon }: Props): React.JSX.Element => {
  let iconSvg: string = ''
  switch (icon) {
    case 'LOCATION':
      iconSvg = '/location.svg'
      break
    case 'YOUTUBE':
      iconSvg = '/youtube.svg'
      break
    case 'LINKEDIN':
      iconSvg = '/linkedin.svg'
      break
    case 'WEBSITE':
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
