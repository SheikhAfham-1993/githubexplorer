import GithubLogo from '@/svg/GithubLogo'
import React from 'react'
/**
 * Renders the header component.
 *
 * @return {React.JSX.Element} The rendered header component.
 */
const Header = (): React.JSX.Element => {
  return (
    <div className="bg-[#f6f8fa] w-full h-12 flex flex-row items-center px-5 space-x-2">
      <GithubLogo />
      <label className="font-semibold text-sm hover:bg-gray-200 px-3 py-1 rounded-lg">
        Github Explorer
      </label>
    </div>
  )
}

export default Header
