type Props = {
  /** The tag to be rendered. */
  text?: string
  /** The class name for the label component. */
  className?: string
  /** The data-cy attribute for the label component. */
  dataCy?: string
}

/**
 * Renders a label component with the given text and styling. It returns empty fragment when text is undefined.
 *
 * @param {string} className - The class name for the label component.
 * @param {string} text - The text to be displayed in the label.
 * @param {string} dataCy - The data-cy attribute for testing purposes.
 * @return {React.JSX.Element} - The rendered label component.
 */

const Label = ({ className, text, dataCy }: Props): React.JSX.Element => {
  return text ? (
    <span data-cy={dataCy} className={className}>
      {text}
    </span>
  ) : (
    <></>
  )
}

export default Label
