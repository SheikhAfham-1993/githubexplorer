'use client'

import {
  BookmarkSquareIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Button from './UI/Button'
import { useState } from 'react'
import useStore from '@/store/global'
import { IOwner } from '@/Interface/IOwner'
import { fetchOwner, fetchRepo } from '@/util/fetchRepo'

/**
 * Fetches owner data for a given repository name.
 *
 * @param {string} repoName - The name of the repository.
 * @return {Promise<void>} - A Promise that resolves when the owner data and repository data have been fetched and set.
 */
const fetchOwnerData = async (repoName: string): Promise<void> => {
  const { setOwnerData, setRepoData } = useStore.getState()
  let ownerRepoData: IOwner | undefined = await fetchOwner(
    `https://api.github.com/users/${repoName}`
  )
  if (ownerRepoData) {
    setOwnerData(ownerRepoData)
    if (ownerRepoData.repos_url) {
      let repo = await fetchRepo(ownerRepoData.repos_url)
      setRepoData(repo)
    }
  }
}

/**
 * Renders the navigation component.
 *
 * @return {React.JSX.Element} The rendered navigation component.
 */
const Navigation = (): React.JSX.Element => {
  const [repoName, setRepoName] = useState<string>('')
  return (
    <div className="bg-[#f6f8fa] w-full h-12 flex flex-row items-center px-5 space-x-2 shadow-md">
      <nav className="">
        <div className="cursor-pointer flex items-center space-x-1 border-b-2 border-b-orange-300 hover:bg-gray-200 px-2 py-1 rounded-t-lg">
          <BookmarkSquareIcon className="w-5 h-5" />
          <span className="text-sm  py-1 rounded-lg">Repositories</span>
        </div>
      </nav>
      <div className="w-full flex flex-row items-center p-5 space-x-2">
        <input
          onChange={(e) => setRepoName(e.target.value)}
          type="text"
          placeholder="Type repository name"
          className="w-full md:w-1/4 border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <Button
          onClick={() => fetchOwnerData(repoName)}
          disabled={repoName === ''}
          classNames="bg-green-600 disabled:bg-green-600/50 px-3 py-1 rounded-lg text-white text-sm font-semibold flex items-center"
        >
          <MagnifyingGlassIcon className="h-5 w-5" /> Search
        </Button>
      </div>
    </div>
  )
}

export default Navigation
