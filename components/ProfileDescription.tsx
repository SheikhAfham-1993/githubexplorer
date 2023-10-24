import Bio from '@/ui/Bio'
import Name from '@/ui/Name'
import Avatar from '@/ui/avatar'

const ProfileDescription = () => {
  return (
    <div className="h-full py-5 px-4 space-y-4">
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0">
        <div className="rounded-full h-16 w-16 md:h-32 md:w-32 lg:h-52 lg:w-52">
          <Avatar />
        </div>

        <Name />
      </div>
      <Bio />
    </div>
  )
}

export default ProfileDescription
