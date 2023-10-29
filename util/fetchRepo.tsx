import axios from 'axios'
import { returnQuery } from './queries'
import useStore from '../store/global'

/**
 * Fetches the owner's data from the GitHub API using GraphQL.
 *
 * @param {string} userName - The GitHub username of the owner.
 * @return {Promise<void>} A Promise that resolves to undefined.
 */

export const fetchOwnerGraphql = async (userName: string): Promise<void> => {
  const { setUserData, setIsLoading } = useStore.getState()
  try {
    setIsLoading(true)
    const res = await axios.post(
      `https://api.github.com/graphql`,
      {
        query: returnQuery(userName),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'bearer ' + process.env.NEXT_PUBLIC_GITHUB_TOKEN,
        },
      }
    )
    if (res && res.status === 200) {
      setUserData(res.data.data.user)
    }
  } catch (error) {
    setUserData(undefined)
  } finally {
    setIsLoading(false)
  }
}
