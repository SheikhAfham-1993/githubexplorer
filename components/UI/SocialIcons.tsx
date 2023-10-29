import Image from 'next/image'
type Props = {
  /** The name of the social icon such as 'location', 'youtube', 'linkedin', 'website', 'stargazers', 'fork', 'follower' . */
  icon: string
}

/**
 * Generates the social icon based on the provided icon name.
 *
 * @param {string} icon - The name of the social icon such as 'location', 'youtube', 'linkedin', 'website', 'stargazers', 'fork', 'follower' .
 * @return {React.JSX.Element} The generated social icon element.
 */

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
    case 'stargazers':
      iconSvg = '/stargazer.svg'
      break
    case 'fork':
      iconSvg = '/forks.svg'
      break
    case 'follower':
      iconSvg = '/followers.svg'
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
