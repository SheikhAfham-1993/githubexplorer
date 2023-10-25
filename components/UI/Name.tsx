type Props = {
  ownerName?: string
  ownerLogin?: string
}

const Name: React.FC<Props> = ({ ownerLogin, ownerName }) => {
  return (
    <div className="flex flex-col w-fit items-start">
      <span className="text-2xl font-semibold">
        {ownerName ?? 'No name available'}
      </span>
      <span className="text-xl">{ownerLogin ?? 'No name available'}</span>
    </div>
  )
}

export default Name
