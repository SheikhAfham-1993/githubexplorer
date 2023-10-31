import XMarkIcon from '@heroicons/react/20/solid/esm/XMarkIcon'
import Label from '../UI/Label'
import { IRepositories } from '../../Interface/IOwner'

type Props = {
  /** The filtered list that is returned after searching for the repository. */
  tempdata: IRepositories[] | undefined
  /** The handler function for clearing the filter. */
  clearFilterHandler: () => void
}

/**
 * Renders the text where it shows how many results are there alongside with clear filter button.
 *
 * @param {Props} tempdata - The filtered list that is returned after searching for the repository.
 * @param {Function} clearFilterHandler - The handler function for clearing the filter.
 * @return {React.JSX.Element} Renders the text where it shows how many results are there alongside with clear filter button.
 */

const SearchResult = ({
  tempdata,
  clearFilterHandler,
}: Props): React.JSX.Element => {
  return (
    <div
      data-cy="search-results"
      className="grid grid-cols-1 lg:flex lg:flex-row lg:items-center border-b border-b-gray-300 py-4 space-y-2 md:space-y-0"
    >
      <div data-cy="search-results-text" className="flex-1">
        {tempdata?.length === 0 ? '0' : `${tempdata?.length}`} result for
        repositories matching <span className="font-semibold">data</span>
      </div>
      <div
        onClick={clearFilterHandler}
        className="flex-none flex items-center w-fit justify-start lg:justify-end space-x-2 cursor-pointer group"
      >
        <XMarkIcon className="h-4 w-4 bg-gray-500 text-white rounded-md group-hover:bg-blue-500" />
        <Label
          className="text-sm group-hover:text-blue-500"
          text="Clear filter"
        />
      </div>
    </div>
  )
}

export default SearchResult
