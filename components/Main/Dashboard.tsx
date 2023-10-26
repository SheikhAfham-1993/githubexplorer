import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ProfileDescription from '@/components/Bio/ProfileDescription'
import Repositories from '@/components/Repositories/Repositories'
import useStore from '@/store/global'

const Dashboard = () => {
  const { ownerData, repoData } = useStore()
  return (
    <>
      <Header />
      <Navigation />
      <div className="flex justify-center w-full px-4 py-5">
        <div className="flex flex-col md:flex-row justify-center">
          <ProfileDescription ownerData={ownerData} />
          <Repositories repoData={repoData} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
