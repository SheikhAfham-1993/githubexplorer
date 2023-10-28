import XMarkIcon from '@heroicons/react/20/solid/esm/XMarkIcon'
import Label from '../UI/Label'
import { IRepo } from '@/Interface/IRepo'

type Props = {
  /** The data to be rendered in the component. */
  tempdata: IRepo[] | undefined
  /** The handler function for clearing the filter. */
  clearFilterHandler: () => void
}

/**
 * Renders the search result component.
 *
 * @param {Props} tempdata - The temporary data for the search result.
 * @param {Function} clearFilterHandler - The handler function for clearing the filter.
 * @return {React.JSX.Element} The rendered search result component.
 */

const SearchResult = ({
  tempdata,
  clearFilterHandler,
}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row items-center border-b border-b-gray-300 py-4">
      <div className="flex-none">
        {tempdata?.length === 0 ? '0' : `${tempdata?.length}`} result for
        repositories matching <span className="font-semibold">data</span>
      </div>
      <div
        onClick={clearFilterHandler}
        className="flex-1 flex items-center w-full justify-end space-x-2 cursor-pointer group"
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
