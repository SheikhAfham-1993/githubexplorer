import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ProfileDescription from '@/components/ProfileDescription'
import Repositories from '@/components/Repositories'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <Header />
      <Navigation />
      <div className="grid grid-cols-1 md:grid-cols-12 w-full px-4 md:px-20 h-full">
        <div className="col-span-3">
          <ProfileDescription />
        </div>
        <div className="col-span-9 py-5">
          <Repositories />
        </div>
      </div>
    </main>
  )
}
