import { IOwner, IUserData } from '@/Interface/IOwner'
import { IRepo } from '@/Interface/IRepo'
import { create } from 'zustand'

type Repository = {
  userData: IUserData | undefined
  ownerData: IOwner | undefined
  repoData: IRepo[]
  setUserData: (userData: IUserData | undefined) => void
  setOwnerData: (ownerData: IOwner | undefined) => void
  setRepoData: (repoData: IRepo[]) => void
}
let useStore = create<Repository>((set) => ({
  userData: undefined,
  ownerData: undefined,
  repoData: [],
  setUserData: (userData: IUserData | undefined) => set({ userData }),
  setOwnerData: (ownerData: IOwner | undefined) => set({ ownerData }),
  setRepoData: (repoData: IRepo[]) => set({ repoData }),
}))

export default useStore
