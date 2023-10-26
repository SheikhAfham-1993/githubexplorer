type Props = {
  tag?: string
}
const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <div className="font-semibold text-xs text-gray-400 border-2 rounded-xl px-2">
      {tag}
    </div>
  )
}

export default Tag
