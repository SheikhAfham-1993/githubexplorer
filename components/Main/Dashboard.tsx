'use client'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ProfileDescription from '@/components/Bio/ProfileDescription'
import Repositories from '@/components/Repositories/Repositories'
import useStore from '@/store/global'

/**
 * Renders the Dashboard component.
 *
 * @returns {React.JSX.Element} The rendered Dashboard component.
 */
const Dashboard = (): React.JSX.Element => {
  const { ownerData, repoData } = useStore()
  return (
    <>
      <Header />
      <Navigation />
      <div className="flex justify-center w-full px-4 py-5">
        <div className="flex flex-col md:flex-row justify-center min-w-full md:min-w-[800px] lg:min-w-[1000px] xl:min-w-[1280px]">
          <ProfileDescription ownerData={ownerData} />
          <Repositories repoData={repoData} ownerName={ownerData?.name} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
