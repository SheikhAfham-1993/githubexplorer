'use client'

import Card from '../UI/Card'
import { useState, useEffect } from 'react'
import Label from '../UI/Label'
import SearchResult from './SearchResult'
import { IRepositories, IUserData } from '../../Interface/IOwner'
import Input from '../UI/Input'

type Props = {
  /** The complete user data from where the repository data is extracted. */
  userData: IUserData
}

/**
 * Renders a list of repositories.
 *
 * @param {Props} userData - The complete user data from where the repository data is extracted.
 * @return {React.JSX.Element} The rendered list of repositories.
 */
const Repositories = ({ userData }: Props): React.JSX.Element => {
  const [tempdata, setTempData] = useState<IRepositories[]>([])
  const [filterText, setFilterText] = useState('')

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
    setFilterText(e.target.value)
    setTempData(
      userData?.repositories?.nodes?.filter((repo) =>
        repo?.name?.toLowerCase().includes(e.target.value.toLowerCase())
      ) ?? []
    )
  }

  /**
   * Clears the filter input and sets the temporary data to the user's repositories nodes, or an empty array if it is null.
   */
  const clearFilterHandler = () => {
    if (filterText) setFilterText('')
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
            <Input
              dataCy="find-repositories"
              onChange={setTempDataHandler}
              width="w-full md:w-3/4"
              placeholder="Find a repository"
              value={filterText}
            />
          </div>
          {filterText && (
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
