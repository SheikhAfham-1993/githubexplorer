import Bio from '@/ui/Bio'
import Name from '@/ui/Name'
import Avatar from '@/ui/avatar'

const ProfileDescription = () => {
  return (
    <div className="h-full py-5 px-4 space-y-4">
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0">
        <Avatar />
        <Name />
      </div>
      <Bio />
    </div>
  )
}

export default ProfileDescription
