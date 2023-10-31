'use client'

import { BookmarkSquareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Label from '../UI/Label'
import SearchUserComponent from './SearchUserCompnent'

/**
 * Renders the navigation component, where user can also search for a github user.
 *
 * @return {React.JSX.Element} The rendered navigation component.
 */
const Navigation = (): React.JSX.Element => {
  const [repoName, setRepoName] = useState<string>('')

  const setRepoNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(e.target.value.trim())
  }
  return (
    <div
      data-cy="navigation-row"
      className="bg-[#f6f8fa] w-full h-12 flex flex-row items-center px-5 space-x-0 md:space-x-4 shadow-md"
    >
      <nav data-cy="navigation" className="hidden md:block">
        <div
          data-cy="navigation-item"
          className="cursor-pointer border-b-2 border-b-orange-300"
        >
          <div
            data-cy="navigation-repo"
            className=" mb-1 flex items-center space-x-1 hover:bg-gray-200 rounded-lg px-2"
          >
            <BookmarkSquareIcon className="w-5 h-5" />
            <Label
              dataCy="navigation-item-name"
              text="Repositories"
              className="text-sm py-1 rounded-lg"
            />
          </div>
        </div>
      </nav>
      <div
        data-cy="search-input-container"
        className="w-full flex flex-row items-center space-x-2"
      >
        <SearchUserComponent
          repoName={repoName}
          setRepoNameHandler={setRepoNameHandler}
        />
      </div>
    </div>
  )
}

export default Navigation
