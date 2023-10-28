import { IUserData } from '@/Interface/IOwner'
import Name from '@/components/UI/Name'
import Avatar from '@/components/UI/avatar'
import Label from '../UI/Label'
import SocialIcons from '../UI/SocialIcons'
import SocialLinks from '../UI/SocialLinks'

type Props = {
  /** The data of the owner. */
  userData: IUserData | undefined
}

/**
 * Renders the profile description component.
 *
 * @param {Props} userData - The data of the owner.
 * @return {React.JSX.Element} The rendered profile description component.
 */
const ProfileDescription = ({ userData }: Props): React.JSX.Element => {
  return (
    <div className="flex-none py-5 space-y-4 w-full md:w-[300px] lg:w-[340px]">
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4">
        <div className="rounded-full h-16 w-16 md:h-60 md:w-60 lg:h-80 lg:w-80 overflow-hidden border border-gray-400">
          <Avatar ownerAvatar={userData?.avatarUrl} />
        </div>
        <Name ownerName={userData?.name} ownerLogin={userData?.login} />
      </div>
      <Label className="w-full md:w-[300px]" text={userData?.bio} />

      <div className="flex flex-col space-y-1">
        {userData?.location && (
          <SocialLinks icon="LOCATION" text={userData?.location} />
        )}

        {userData?.socialAccounts?.nodes?.map((account, index) => (
          <SocialLinks
            key={index}
            icon={account?.provider}
            text={account?.displayName}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileDescription
