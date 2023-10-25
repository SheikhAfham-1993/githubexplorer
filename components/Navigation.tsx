import { BookmarkSquareIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
  return (
    <div className="bg-[#f6f8fa] w-full h-12 flex flex-row items-center px-5 space-x-2 shadow-md">
      <nav className="">
        <div className="cursor-pointer flex items-center space-x-1 border-b-2 border-b-orange-300 hover:bg-gray-200 px-2 py-1 rounded-t-lg">
          <BookmarkSquareIcon className="w-5 h-5" />
          <span className="text-sm  py-1 rounded-lg">Repositories</span>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
