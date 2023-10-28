import Label from './Label'
import SocialIcons from './SocialIcons'

type Props = {
  icon: string
  text: string
}
const SocialLinks = ({ icon, text }: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row space-x-2">
      <SocialIcons icon={icon} />
      <Label className="w-full text-sm" text={text} />
    </div>
  )
}

export default SocialLinks
