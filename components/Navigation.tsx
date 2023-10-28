'use client'

import {
  BookmarkSquareIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Button from './UI/Button'
import { useState } from 'react'
import { fetchOwnerGraphql } from '@/util/fetchRepo'

/**
 * Renders the navigation component.
 *
 * @return {React.JSX.Element} The rendered navigation component.
 */
const Navigation = (): React.JSX.Element => {
  const [repoName, setRepoName] = useState<string>('')
  return (
    <div className="bg-[#f6f8fa] w-full h-12 flex flex-row items-center px-5 space-x-0 md:space-x-4 shadow-md">
      <nav className="hidden md:block">
        <div className="cursor-pointer border-b-2 border-b-orange-300">
          <div className=" mb-1 flex items-center space-x-1 hover:bg-gray-200 rounded-lg px-2">
            <BookmarkSquareIcon className="w-5 h-5" />
            <span className="text-sm py-1 rounded-lg">Repositories</span>
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-row items-center space-x-2">
        <input
          defaultValue={repoName}
          onChange={(e) => setRepoName(e.target.value.trim())}
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
          onClick={() => fetchOwnerGraphql(repoName)}
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
