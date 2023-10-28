'use client'

import Card from '../UI/Card'
import { useState, useEffect, useRef } from 'react'
import { IRepo } from '@/Interface/IRepo'
import XMarkIcon from '@heroicons/react/20/solid/esm/XMarkIcon'
import Label from '../UI/Label'
import SearchResult from './SearchResult'

type Props = {
  /** The data for the repositories. */
  repoData: IRepo[]
  ownerName: string | undefined
}

/**
 * Renders a list of repositories.
 *
 * @param {Props} repoData - The data for the repositories.
 * @return {React.JSX.Element} The rendered list of repositories.
 */
const Repositories = ({ repoData, ownerName }: Props): React.JSX.Element => {
  const filterRef = useRef<HTMLInputElement>(null)
  const [tempdata, setTempData] = useState<IRepo[]>([])

  useEffect(() => {
    setTempData(repoData)
  }, [repoData])

  return (
    <div className="flex-1">
      <div className="border-b border-b-gray-300  pb-5">
        <input
          ref={filterRef}
          onChange={(e) => {
            setTempData(
              repoData?.filter((repo) => repo.name?.includes(e.target.value))
            )
          }}
          className="w-full md:w-3/4 border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
          type="text"
          placeholder="Find a repository"
        />
      </div>
      {filterRef.current?.value && (
        <SearchResult
          tempdata={tempdata}
          clearFilterHandler={() => {
            if (filterRef.current) filterRef.current.value = ''
            setTempData(repoData)
          }}
        />
      )}
      {tempdata?.length > 0 && (
        <div className="pb-5">
          {tempdata.map((repo) => (
            <Card key={repo.name} repo={repo} />
          ))}
        </div>
      )}
      {tempdata?.length === 0 && (
        <Label
          className="pb-5 text-lg font-bold flex flex-col justify-center items-center text-black flex-grow h-full"
          text={
            ownerName
              ? `${ownerName} doesn’t have any repositories that match`
              : 'Could not find user'
          }
        />
      )}
    </div>
  )
}

export default Repositories
