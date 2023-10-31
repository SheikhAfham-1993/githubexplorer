type Props = {
  dataCy: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder: string
  width: string
}

/**
 * The input component of type text where user can type.
 *
 * @param {string} (optional) value - The current value of the input.
 * @param {Function} onChange - The function to call when the input value changes.
 * @param {string} placeholder - The placeholder text to display when the input is empty.
 * @param {string} width - The width of the input element.
 * @param {Function} (optional) onKeyDown - The function to call when a key is pressed down on the input.
 * @param {string} dataCy - The data-cy attribute value for testing.
 * @returns {React.JSX.Element} The rendered input element.
 */
const Input = ({
  value,
  onChange,
  placeholder,
  width,
  onKeyDown,
  dataCy,
}: Props): React.JSX.Element => {
  return (
    <input
      data-cy={dataCy}
      name="searchRepo"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type="text"
      placeholder={placeholder}
      className={`${width} border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600`}
    />
  )
}

export default Input
