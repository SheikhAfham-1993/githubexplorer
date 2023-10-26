type Props = {
  /** The title to be displayed. */
  title?: string
}

/**
 * Renders a title component with the given title.
 *
 * @param {Props} title - The title to be displayed.
 * @return {React.JSX.Element} The rendered title component.
 */
const Title = ({ title }: Props): React.JSX.Element => {
  return (
    <div className="font-bold text-lg text-[#0969da] cursor-pointer hover:underline hover:underline-offset-1">
      {title}
    </div>
  )
}

export default Title
