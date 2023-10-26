type Props = {
  updated?: Date
}
const UpdatedAt: React.FC<Props> = ({ updated }) => {
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
