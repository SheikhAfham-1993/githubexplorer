type Props = {
  /** The git user id of the owner. */
  ownerName?: string
  /** The name of the owner. */
  ownerLogin?: string
}
/**
 * Renders the name of the owner.
 *
 * @param {string} ownerLogin - The git user id of the owner.
 * @param {string} ownerName - The name of the owner.
 * @return {React.JSX.Element} - The JSX element representing the owner's name.
 */
const Name = ({ ownerLogin, ownerName }: Props): React.JSX.Element => {
  return (
    <div className="flex flex-col w-fit items-start">
      <span className="text-2xl font-semibold">
        {ownerName ?? 'No name available'}
      </span>
      <span className="text-xl">{ownerLogin ?? 'No name available'}</span>
    </div>
  )
}

export default Name
