import { IOwner } from '@/Interface/IOwner'
import { IRepo } from '@/Interface/IRepo'
import { create } from 'zustand'

type Repository = {
  ownerData: IOwner | undefined
  repoData: IRepo[]
  setOwnerData: (ownerData: IOwner | undefined) => void
  setRepoData: (repoData: IRepo[]) => void
}
let useStore = create<Repository>((set) => ({
  ownerData: undefined,
  repoData: [],
  setOwnerData: (ownerData: IOwner | undefined) => set({ ownerData }),
  setRepoData: (repoData: IRepo[]) => set({ repoData }),
}))

export default useStore
