import Label from './Label'
import Icons from './Icons'

type Props = {
  /** The icon for the info tag such as 'location', 'youtube', 'linkedin', 'website', 'stargazers', 'fork', 'follower' */
  icon: string
  /** The text for the info tag. */
  text: string
  /** The class names for the label component. */
  labelClassNames?: string
}

/**
 * Renders a component that displays info tag with an icon and text.
 *
 * @param {string} icon - The icon for the info tag such as 'location', 'youtube', 'linkedin', 'website', 'stargazers', 'fork', 'follower'.
 * @param {string} text - The text for the info tag.
 * @param {string} labelClassNames - The class names for the label component default to 'w-full text-sm'.
 * @returns {React.JSX.Element} The rendered info tag component.
 */
const InfoTag = ({
  icon,
  text,
  labelClassNames = 'w-full text-sm',
}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row space-x-2">
      <Icons icon={icon} />
      <Label className={labelClassNames} text={text} />
    </div>
  )
}

export default InfoTag
