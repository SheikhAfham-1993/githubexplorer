import Title from '@/components/UI/Title'
import Description from '@/components/UI/Description'
import Tag from '@/components/UI/Tag'
import UpdatedAt from '@/components/UI/UpdatedAt'
import { IRepo } from '@/Interface/IRepo'

type Props = {
  /** The repository object containing information about the repo. */
  repo: IRepo
}

/**
 * Renders a card component for a given repository.
 *
 * @param {Props} repo - The repository object containing information about the repo.
 * @return {React.JSX.Element} - The rendered card component.
 */
const Card = ({ repo }: Props): React.JSX.Element => {
  return (
    <div className="border-b border-b-gray-300 flex flex-col h-32 py-4">
      <div className="flex flex-row items-center space-x-4">
        <Title title={repo?.name} />
        <Tag tag={repo.visibility} />
      </div>
      <Description description={repo.description} />
      <div className="flex-1 items-end">
        <UpdatedAt updated={repo.updated_at} />
      </div>
    </div>
  )
}

export default Card
