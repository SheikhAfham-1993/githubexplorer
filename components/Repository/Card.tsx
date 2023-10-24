import Description from './Description'
import Tag from './Tag'
import Title from './Title'
import UpdatedAt from './UpdatedAt'

const Card = () => {
  return (
    <div className="border-b border-b-gray-300 flex flex-col h-36 py-4">
      <div className="flex flex-row items-center space-x-4">
        <Title />
        <Tag />
      </div>
      <Description />
      <div className="flex-1 items-end">
        <UpdatedAt />
      </div>
    </div>
  )
}

export default Card
