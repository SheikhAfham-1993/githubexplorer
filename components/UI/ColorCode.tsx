type Props = {
  /** The repository object containing information about the repo. */
  code?: string
}

/**
 * The rendered ColorCode component, if no color then return empty fragment.
 *
 * @param {Props} code - The color code prop.
 * @return {React.JSX.Element} The rendered ColorCode component, if no color then return empty fragment.
 */

const ColorCode = ({ code }: Props): React.JSX.Element => {
  return code ? (
    <div
      style={{ backgroundColor: code }}
      className={`w-3 h-3 rounded-full`}
    ></div>
  ) : (
    <></>
  )
}
export default ColorCode
