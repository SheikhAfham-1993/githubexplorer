import { fetchOwnerGraphql } from '../../util/fetchRepo'
import useStore from '../../store/global'
import Button from '../UI/Button'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Input from '../UI/Input'

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
      <Input
        value={repoName}
        onChange={setRepoNameHandler}
        data-cy="search-input"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            fetchOwnerGraphql(repoName)
          }
        }}
        placeholder="Type repository name"
        width="w-full md:w-[200px]"
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
