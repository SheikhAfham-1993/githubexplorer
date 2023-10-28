import UpdatedAt from '@/components/UI/UpdatedAt'
import Label from './Label'
import { IRepositories } from '@/Interface/IOwner'
import Link from 'next/link'

type Props = {
  /** The repository object containing information about the repo. */
  repo: IRepositories
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
        <Link href={repo.url} target="_blank">
          <Label
            className="font-bold text-lg text-[#0969da] cursor-pointer hover:underline hover:underline-offset-1"
            text={repo?.name}
          />
        </Link>

        <Label
          className="font-bold text-xs text-gray-600 border-2 rounded-xl px-2 capitalize"
          text={repo.visibility.toLowerCase()}
        />
      </div>
      <Label
        className="text-sm max-w-2xl line-clamp-3"
        text={repo.description}
      />

      <div className="flex-1 items-end pt-5">
        <div className="flex flex-row items-center space-x-4">
          <div className="flex flex-row items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-600 rounded-full">&nbsp;</div>
            <Label
              className="text-xs text-gray-600"
              text={repo.languages?.nodes?.[0]?.name}
            />
          </div>

          <UpdatedAt updated={repo.pushedAt} />
        </div>
      </div>
    </div>
  )
}

export default Card
