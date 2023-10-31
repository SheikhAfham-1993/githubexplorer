'use client'
import Header from './Header'
import Navigation from './Navigation'
import ProfileDescription from '../../components/Bio/ProfileDescription'
import Repositories from '../../components/Repositories/Repositories'
import Label from '../UI/Label'
import { IUserData } from '../../Interface/IOwner'
import useStore from '../../store/global'
import Loader from '../UI/Loader'

type Props = {
  /** User data of the github user who owns the repositories. */
  userData: IUserData | undefined
}

/**
 * Renders the Dashboard component.
 *
 * @returns {React.JSX.Element} The rendered Dashboard component.
 */
const Dashboard = ({ userData }: Props): React.JSX.Element => {
  // isLoading is the state which will be used when the data is being fetched
  const { isLoading } = useStore()

  return (
    <>
      <Header />
      <Navigation />
      <div data-cy="dashboard" className="flex justify-center w-full px-4 py-5">
        <div
          data-cy="dashboard-content"
          className="flex flex-col md:flex-row justify-center min-w-full md:min-w-[600px] lg:min-w-[1000px] xl:min-w-[1280px]"
        >
          {isLoading && <Loader />}
          {!isLoading && userData && (
            <>
              <ProfileDescription userData={userData} />
              <Repositories userData={userData} />
            </>
          )}
          {!isLoading && !userData && (
            <div
              data-cy="no-repositories"
              className="flex w-full h-full justify-center"
            >
              <Label
                dataCy="no-repositories-label"
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
