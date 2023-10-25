import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ProfileDescription from '@/components/Bio/ProfileDescription'
import Repositories from '@/components/Repositories/Repositories'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <Header />
      <Navigation />

      <div className="w-full flex flex-row items-center p-5 space-x-2">
        <input
          type="text"
          placeholder="Type repository name"
          className="w-full md:w-1/4 border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <button className="bg-green-600 px-3 py-1 rounded-lg text-white text-sm font-semibold flex items-center">
          <MagnifyingGlassIcon className="h-5 w-5" /> Search
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full px-4 md:px-20 py-5">
        <ProfileDescription />
        <Repositories />
      </div>
    </main>
  )
}
