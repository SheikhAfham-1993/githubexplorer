import UpdatedAt from './UpdatedAt'
import Label from './Label'
import { IRepositories } from '../../Interface/IOwner'
import Link from 'next/link'
import InfoTag from './InfoTag'
import ColorCode from './ColorCode'

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
          {repo.languages?.nodes && repo.languages?.nodes.length > 0 && (
            <div className="flex flex-row items-center space-x-1">
              {/* this is coded with styles because tailwind doesn't support color codes in runtime */}
              <ColorCode code={repo.languages?.nodes[0]?.color} />
              <Label
                className="text-xs text-gray-600"
                text={repo.languages?.nodes[0]?.name}
              />
            </div>
          )}
          <InfoTag
            icon="stargazers"
            text={repo.stargazerCount.toString()}
            labelClassNames="w-full text-xs"
          />
          <InfoTag
            icon="fork"
            text={repo.forkCount.toString()}
            labelClassNames="w-full text-xs"
          />
          <UpdatedAt updated={repo.pushedAt} />
        </div>
      </div>
    </div>
  )
}

export default Card
