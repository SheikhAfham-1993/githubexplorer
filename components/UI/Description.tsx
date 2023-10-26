type Props = {
  /** The description of the repo */
  description?: string
}

/**
 * Renders a description component.
 *
 * @param {Props} description - The description to be rendered.
 * @returns {React.JSX.Element} A React element representing the description component.
 */
const Description = ({ description }: Props): React.JSX.Element => {
  return (
    <div className="text-sm max-w-2xl whitespace-pre-wrap">{description}</div>
  )
}

export default Description
