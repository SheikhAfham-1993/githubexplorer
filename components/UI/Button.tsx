type Props = {
  /** The class names to apply to the button element. */
  classNames: string
  /** The content to display inside the button element. */
  children: React.ReactNode
  /** The function to call when the button is clicked. */
  onClick: () => void
  /** Whether the button should be disabled or not. */
  disabled: boolean
  /** The data-cy attribute to apply to the button element. */
  dataCy?: string
}

/**
 * Render a button component.
 *
 * @param {object} Props - The props object containing the following properties:
 *   - {string} classNames: The class names to be applied to the button.
 *   - {ReactNode} children: The content to be displayed inside the button.
 *   - {function} onClick: The function to be called when the button is clicked.
 *   - {boolean} disabled: Determines if the button is disabled.
 *   - {string} dataCy?: The data-cy attribute value for testing purposes.
 *
 * @return {ReactElement} The rendered button component.
 */
const Button = ({
  classNames,
  children,
  onClick,
  disabled,
  dataCy,
}: Props): React.JSX.Element => {
  return (
    <button
      data-cy={dataCy}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {children}
    </button>
  )
}

export default Button
