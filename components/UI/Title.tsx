type Props = {
  title?: string
}
const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="font-bold text-lg text-[#0969da] cursor-pointer hover:underline hover:underline-offset-1">
      {title}
    </div>
  )
}

export default Title
