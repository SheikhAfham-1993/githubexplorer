import { IOwner } from '@/Interface/IOwner'
import Bio from '@/components/UI/Bio'
import Name from '@/components/UI/Name'
import Avatar from '@/components/UI/avatar'

type Props = {
  /** The data of the owner. */
  ownerData: IOwner | undefined
}

/**
 * Renders the profile description component.
 *
 * @param {Props} ownerData - The data of the owner.
 * @return {React.JSX.Element} The rendered profile description component.
 */
const ProfileDescription = ({ ownerData }: Props): React.JSX.Element => {
  return (
    <div className="flex-none py-5 space-y-4 w-full md:w-[300px] lg:w-[340px]">
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4">
        <div className="rounded-full h-16 w-16 md:h-60 md:w-60 lg:h-80 lg:w-80 overflow-hidden border border-gray-400">
          <Avatar ownerAvatar={ownerData?.avatar_url} />
        </div>
        <Name ownerName={ownerData?.name} ownerLogin={ownerData?.login} />
      </div>
      <Bio ownerBio={ownerData?.bio} />
    </div>
  )
}

export default ProfileDescription
