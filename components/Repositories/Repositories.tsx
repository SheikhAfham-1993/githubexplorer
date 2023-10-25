import Card from '../UI/Card'

const Repositories = () => {
  return (
    <div className="flex-1">
      <div className="border-b border-b-gray-300  pb-5">
        <input
          className="w-full md:w-3/4 border border-gray-400 py-1 px-3 rounded-lg placeholder:text-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
          type="text"
          placeholder="Find a repository"
        />
      </div>

      <div className="pb-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Repositories
