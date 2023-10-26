import Card from '../UI/Card'
import { useState, useEffect } from 'react'
import { IRepo } from '@/Interface/IRepo'

type Props = {
  repoData: IRepo[] | undefined
}
const Repositories: React.FC<Props> = ({ repoData }) => {
  const [tempdata, setTempData] = useState<IRepo[] | undefined>(undefined)

  useEffect(() => {
    if (!repoData) return
    setTempData(repoData)
  }, [repoData])

  return (
    <div className="flex-1">
      <div className="border-b border-b-gray-300  pb-5">
        <input
          onChange={(e) => {
            setTempData(
              repoData?.filter((repo) => repo.name?.includes(e.target.value))
            )
          }}
          className="w-full md:w-3/4 border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
          type="text"
          placeholder="Find a repository"
        />
      </div>

      <div className="pb-5">
        {tempdata &&
          tempdata.map((repo) => <Card key={repo.name} repo={repo} />)}
      </div>
    </div>
  )
}

export default Repositories
