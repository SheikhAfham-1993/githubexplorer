import { fetchOwnerGraphql } from '../../util/fetchRepo'
import useStore from '../../store/global'
import Button from '../UI/Button'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type Props = {
  repoName: string
  setRepoNameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchUserComponent = ({
  repoName,
  setRepoNameHandler,
}: Props): React.JSX.Element => {
  const { isLoading } = useStore()
  return (
    <>
      <input
        name="searchRepo"
        data-cy="search-input"
        defaultValue={repoName}
        onChange={setRepoNameHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            fetchOwnerGraphql(repoName)
          }
        }}
        type="text"
        placeholder="Type repository name"
        className="w-full md:w-[200px] border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
      />
      <Button
        dataCy="search-button"
        onClick={() => fetchOwnerGraphql(repoName)}
        disabled={repoName === '' || isLoading}
        classNames="bg-green-600 disabled:bg-green-600/50 px-3 py-1 rounded-lg text-white text-sm font-semibold flex items-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5" /> Search
      </Button>
    </>
  )
}

export default SearchUserComponent
