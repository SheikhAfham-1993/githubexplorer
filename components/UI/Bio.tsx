type Props = {
  /** The description of the owner if not provided then defaults to 'No bio available'. */
  ownerBio?: string
}
/**
 * Renders a paragraph element with the owner's bio.
 *
 * @param {Props} ownerBio - The owner's bio.
 * @return {React.JSX.Element} The rendered paragraph element.
 */
const Bio = ({ ownerBio }: Props): React.JSX.Element => {
  return <p className="w-full md:w-[300px]">{ownerBio ?? 'No bio available'}</p>
}

export default Bio
