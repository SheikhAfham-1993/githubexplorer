type Props = {
  /** The tag to be rendered. */
  text?: string
  /** The class name for the label component. */
  className?: string
}
/**
 * Renders a label component with an optional custom class name and text.
 *
 * @param {string} className - The class name for the label component.
 * @param {string} text - The text to be displayed in the label component. Default value is '--'.
 * @return {React.JSX.Element} - The rendered label component.
 */

const Label = ({ className, text }: Props): React.JSX.Element => {
  return text ? <span className={className}>{text}</span> : <></>
}

export default Label
