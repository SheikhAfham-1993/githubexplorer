import React from 'react'
import Label from '../UI/Label'
import Image from 'next/image'
/**
 * Renders the header component.
 *
 * @return {React.JSX.Element} The rendered header component.
 */
const Header = (): React.JSX.Element => {
  return (
    <div
      data-cy="header"
      className="bg-[#f6f8fa] w-full h-12 flex flex-row items-center px-5 space-x-2"
    >
      <Image src="/github.svg" width={30} height={30} alt="logo" />
      <Label
        dataCy="header-title"
        className="font-semibold text-sm hover:bg-gray-200 px-3 py-1 rounded-lg"
        text="Github Explorer"
      />
    </div>
  )
}

export default Header
