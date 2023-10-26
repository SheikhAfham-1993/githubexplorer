import { IOwner } from '@/Interface/IOwner'
import { IRepo } from '@/Interface/IRepo'
import axios from 'axios'

export const fetchOwner = async (url: string): Promise<IOwner | undefined> => {
  let ownerData: IOwner | undefined
  try {
    const res = await axios.get(url)
    if (res && res.status === 200) {
      ownerData = res.data
    }
  } catch (error) {
    ownerData = undefined
  } finally {
    return ownerData
  }
}

export const fetchRepo = async (url: string): Promise<IRepo[]> => {
  let repoData: IRepo[]
  repoData = []
  try {
    const res = await axios.get(url)
    if (res && res.status === 200) {
      repoData = res.data
    }
  } catch (error) {
    repoData = []
  } finally {
    return repoData
  }
}
