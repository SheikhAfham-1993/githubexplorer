type Props = {
  /** The class names to apply to the button element. */
  classNames: string
  /** The content to display inside the button element. */
  children: React.ReactNode
  /** The function to call when the button is clicked. */
  onClick: () => void
  /** Whether the button should be disabled or not. */
  disabled: boolean
}

/**
 * Renders a button component.
 *
 * @param {Props} classNames - The class names to apply to the button element.
 * @param {ReactNode} children - The content to display inside the button element.
 * @param {() => void} onClick - The function to call when the button is clicked.
 * @param {boolean} disabled - Whether the button should be disabled or not.
 * @return {React.JSX.Element} The rendered button component.
 */
const Button = ({
  classNames,
  children,
  onClick,
  disabled,
}: Props): React.JSX.Element => {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames}>
      {children}
    </button>
  )
}

export default Button
