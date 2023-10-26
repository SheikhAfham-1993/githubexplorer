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
  return (
    <div className="text-xs text-gray-400 flex items-end h-full">
      updated{' '}
      {updated &&
        new Date(updated).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })}
    </div>
  )
}

export default UpdatedAt
