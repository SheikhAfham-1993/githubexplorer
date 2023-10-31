type Props = {
  'data-cy': string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  width?: string
}

const Input = ({
  value,
  onChange,
  placeholder,
  width,
  ...restProps
}: Props) => {
  return (
    <input
      name="searchRepo"
      defaultValue={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className={`${width} border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600`}
      {...restProps}
    />
  )
}

export default Input
