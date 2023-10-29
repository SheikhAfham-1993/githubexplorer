import Label from './Label'
import SocialIcons from './SocialIcons'

type Props = {
  icon: string
  text: string
  labelClassNames?: string
}
const SocialLinks = ({
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

export default SocialLinks
