type Props = {
  ownerBio?: string
}
const Bio: React.FC<Props> = ({ ownerBio }) => {
  return <p className="w-full">{ownerBio ?? 'No bio available'}</p>
}

export default Bio
