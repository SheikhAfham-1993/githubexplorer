type Props = {
  classNames: string
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}
const Button: React.FC<Props> = ({
  classNames,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames}>
      {children}
    </button>
  )
}

export default Button
