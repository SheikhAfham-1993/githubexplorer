type Props = {
  /** The tag to be rendered. */
  tag?: string
}

/**
 * Render a tag component.
 *
 * @param {Props} tag - The tag to be rendered.
 * @return {React.JSX.Element} The rendered tag component.
 */
const Tag = ({ tag }: Props): React.JSX.Element => {
  return (
    <div className="font-semibold text-xs text-gray-400 border-2 rounded-xl px-2">
      {tag}
    </div>
  )
}

export default Tag
