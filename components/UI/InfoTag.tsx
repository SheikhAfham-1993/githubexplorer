import Label from './Label'
import SocialIcons from './SocialIcons'

type Props = {
  /** The icon for the social link  such as 'location', 'youtube', 'linkedin', 'website', 'stargazers', 'fork', 'follower' */
  icon: string
  /** The text for the social link. */
  text: string
  /** The class names for the label component. */
  labelClassNames?: string
}

/**
 * Renders a component that displays social links with an icon and text.
 *
 * @param {object} props - The props object.
 * @param {string} props.icon - The icon for the social link  such as 'location', 'youtube', 'linkedin', 'website', 'stargazers', 'fork', 'follower'.
 * @param {string} props.text - The text for the social link.
 * @param {string} [props.labelClassNames='w-full text-sm'] - The class names for the label component.
 * @returns {React.JSX.Element} The rendered social links component.
 */
const InfoTag = ({
  icon,
  text,
  labelClassNames = 'w-full text-sm',
}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row space-x-2">
      <SocialIcons icon={icon} />
      <Label className={labelClassNames} text={text} />
    </div>
  )
}

export default InfoTag
