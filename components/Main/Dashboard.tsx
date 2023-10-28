'use client'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import ProfileDescription from '../../components/Bio/ProfileDescription'
import Repositories from '../../components/Repositories/Repositories'
import Label from '../UI/Label'
import { IUserData } from '../../Interface/IOwner'

type Props = {
  userData: IUserData | undefined
}

/**
 * Renders the Dashboard component.
 *
 * @returns {React.JSX.Element} The rendered Dashboard component.
 */
const Dashboard = ({ userData }: Props): React.JSX.Element => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="flex justify-center w-full px-4 py-5">
        <div className="flex flex-col md:flex-row justify-center min-w-full md:min-w-[600px] lg:min-w-[1000px] xl:min-w-[1280px]">
          {userData && (
            <>
              <ProfileDescription userData={userData} />
              <Repositories userData={userData} />
            </>
          )}
          {!userData && (
            <div className="flex w-full h-full justify-center">
              <Label
                className="pb-5 text-lg font-bold flex flex-col justify-center items-center text-black flex-grow h-full"
                text="No repositories to show"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Dashboard
