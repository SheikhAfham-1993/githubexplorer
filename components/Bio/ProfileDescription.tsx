import { IUserData } from '../../Interface/IOwner'
import Name from '../UI/Name'
import UserAvatar from '../UI/UserAvatar'
import Label from '../UI/Label'
import InfoTag from '../UI/InfoTag'
import { formatFigure } from '../../util/helpers'

type Props = {
  /** The data of the owner the user fetched. */
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
    <div
      data-cy="profile-description"
      className="flex-none py-5 space-y-4 w-full md:w-[300px] lg:w-[340px]"
    >
      <div
        data-cy="profile-avatar"
        className="flex flex-row md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4"
      >
        <UserAvatar ownerAvatar={userData?.avatarUrl} />
        <Name ownerName={userData?.name} ownerLogin={userData?.login} />
      </div>
      <div className="pt-1">
        <Label
          dataCy="profile-bio"
          className="w-full md:w-[300px]"
          text={userData?.bio}
        />
      </div>

      <div data-cy="profile-followers" className="pt-1 flex flex-row space-x-2">
        <InfoTag
          icon="follower"
          text={`${formatFigure(
            userData?.followers.totalCount ?? 0
          )} followers`}
        />
        <Label
          dataCy="profile-following"
          className="text-sm"
          text={`${userData?.following.totalCount} following`}
        />
      </div>

      <div data-cy="profile-social" className="flex flex-col space-y-1">
        {userData?.location && (
          <InfoTag icon="LOCATION" text={userData?.location} />
        )}

        {userData?.socialAccounts?.nodes?.map((account, index) => (
          <InfoTag
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
