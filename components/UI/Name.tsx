import Label from './Label'

type Props = {
  /** The git user id of the owner. */
  ownerName?: string
  /** The name of the owner. */
  ownerLogin?: string
}
/**
 * Renders the name and github userid of the owner. It wont display the tag if any of the values are empty.
 *
 * @param {string} ownerLogin - The git user id of the owner.
 * @param {string} ownerName - The name of the owner.
 * @return {React.JSX.Element} - The JSX element representing the owner's name.
 */
const Name = ({ ownerLogin, ownerName }: Props): React.JSX.Element => {
  return (
    <div className="flex flex-col w-fit items-start">
      <Label
        dataCy="owner-name"
        className="text-2xl font-semibold"
        text={ownerName}
      />
      <Label dataCy="owner-login" className="text-xl" text={ownerLogin} />
    </div>
  )
}

export default Name
