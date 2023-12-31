import { IRepositories } from '@/Interface/IOwner'
import ReactPaginate from 'react-paginate'
import Card from '../UI/Card'

type Props = {
  /** The data to be paginated. */
  tempdata: IRepositories[]
  /** The function to handle page clicks. */
  handlePageClick: any
  /** The offset of the first item to be displayed. */
  itemOffset: number
  /** The offset of the last item to be displayed. */
  endOffset: number
  /** The total number of pages. */
  pageCount: number
  /** Total item to show per page */
  itemsPerPage: number
}

/**
 * Renders a paginated card component.
 *
 * @param {Props} tempdata - The data to be paginated.
 * @param {function} handlePageClick - The function to handle page clicks.
 * @param {number} itemOffset - The offset of the first item to be displayed.
 * @param {number} endOffset - The offset of the last item to be displayed.
 * @param {number} pageCount - The total number of pages.
 * @param {number} itemsPerPage -Total item to show per page
 * @return {JSX.Element} The paginated card component.
 */

const PaginatedCard = ({
  tempdata,
  handlePageClick,
  itemOffset,
  endOffset,
  pageCount,
  itemsPerPage,
}: Props): JSX.Element => {
  const returnPrevNextTag = (text: string) => {
    return (
      <div className="px-3 flex items-center justify-center hover:text-blue-600 hover:underline">
        {text}
      </div>
    )
  }
  return (
    <>
      <div data-cy="repositories-card-list" className="pb-5">
        {tempdata?.slice(itemOffset, endOffset).map((repo, index) => (
          <Card key={index} repo={repo} />
        ))}
      </div>
      {tempdata?.length > itemsPerPage && (
        <ReactPaginate
          breakLabel=""
          nextLabel={returnPrevNextTag('Next >')}
          className="flex justify-center items-center space-x-2"
          activeClassName="hidden"
          pageClassName="hidden"
          onPageChange={handlePageClick}
          pageRangeDisplayed={undefined}
          pageCount={pageCount}
          previousLabel={returnPrevNextTag('< Previous')}
          renderOnZeroPageCount={() => null}
        />
      )}
    </>
  )
}

export default PaginatedCard
