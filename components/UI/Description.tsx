type Props = {
  description?: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <div className="text-sm max-w-2xl whitespace-pre-wrap">{description}</div>
  )
}

export default Description
