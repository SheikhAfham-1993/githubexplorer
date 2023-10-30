'use client'

import Card from '../UI/Card'
import { useState, useEffect, useRef } from 'react'
import Label from '../UI/Label'
import SearchResult from './SearchResult'
import { IRepositories, IUserData } from '../../Interface/IOwner'

type Props = {
  /** The data for the repositories. */
  userData: IUserData
}

/**
 * Renders a list of repositories.
 *
 * @param {Props} userData - The data for the repositories.
 * @return {React.JSX.Element} The rendered list of repositories.
 */
const Repositories = ({ userData }: Props): React.JSX.Element => {
  const filterRef = useRef<HTMLInputElement>(null)
  const [tempdata, setTempData] = useState<IRepositories[]>([])

  useEffect(() => {
    setTempData(userData.repositories?.nodes ?? [])
  }, [userData])

  /**
   * Sets the temp data based on the user input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object representing the change in the input field.
   * @return {void} No return value.
   */
  const setTempDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempData(
      userData?.repositories?.nodes?.filter((repo) =>
        repo?.name?.includes(e.target.value)
      ) ?? []
    )
  }

  /**
   * Clears the filter input and sets the temporary data to the user's repositories nodes, or an empty array if it is null.
   */
  const clearFilterHandler = () => {
    if (filterRef.current) filterRef.current.value = ''
    setTempData(userData?.repositories?.nodes ?? [])
  }

  return (
    <div data-cy="repositories-container" className="flex-1">
      {userData && (
        <>
          <div
            data-cy="user-repositories"
            className="border-b border-b-gray-300  pb-5"
          >
            <input
              data-cy="find-repositories"
              ref={filterRef}
              onChange={setTempDataHandler}
              className="w-full md:w-3/4 border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              type="text"
              placeholder="Find a repository"
            />
          </div>
          {filterRef.current?.value && (
            <SearchResult
              tempdata={tempdata}
              clearFilterHandler={clearFilterHandler}
            />
          )}
          {tempdata?.length > 0 && (
            <div data-cy="repositories-card-list" className="pb-5">
              {tempdata.map((repo, index) => (
                <Card key={index} repo={repo} />
              ))}
            </div>
          )}
          {tempdata?.length === 0 && (
            <Label
              dataCy="no-repositories-found"
              className="pb-5 text-lg font-bold flex flex-col justify-center items-center text-black flex-grow h-full"
              text={`No repositories found`}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Repositories
