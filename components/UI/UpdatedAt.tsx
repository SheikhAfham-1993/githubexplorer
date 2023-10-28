import Label from './Label'

type Props = {
  /** Time when the repository was last updated. */
  updated?: Date
}

/**
 * Renders a component to display the "updated" date.
 *
 * @param {Props} updated - Time when the repository was last updated.
 * @return {JSX.Element} A React component that displays the "updated" date.
 */
const UpdatedAt = ({ updated }: Props): React.JSX.Element => {
  let text = updated
    ? `Updated
    ${new Date(updated).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })}`
    : undefined
  return (
    <Label
      className="text-xs text-gray-600 flex items-end h-full"
      text={text}
    />
  )
}

export default UpdatedAt
