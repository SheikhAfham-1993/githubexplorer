import UpdatedAt from '@/components/UI/UpdatedAt'
import { IRepo } from '@/Interface/IRepo'
import Label from './Label'

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
    <div className="border-b border-b-gray-300 flex flex-col min-h-32 py-4">
      <div className="flex flex-row items-center space-x-4">
        <Label
          className="font-bold text-lg text-[#0969da] cursor-pointer hover:underline hover:underline-offset-1"
          text={repo?.name}
        />
        <Label
          className="font-bold text-xs text-gray-500 border-2 rounded-xl px-2"
          text={repo.visibility}
        />
      </div>
      <Label
        className="text-sm max-w-2xl line-clamp-3"
        text={repo.description}
      />
      <div className="flex-1 items-end pt-3">
        <UpdatedAt updated={repo.updated_at} />
      </div>
    </div>
  )
}

export default Card
