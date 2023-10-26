import { IOwner } from '@/Interface/IOwner'
import { IRepo } from '@/Interface/IRepo'
import { create } from 'zustand'

type Repository = {
  ownerData: IOwner
  repoData: IRepo[]
  setOwnerData: (ownerData: IOwner) => void
  setRepoData: (repoData: IRepo[]) => void
}
let useStore = create<Repository>((set) => ({
  ownerData: {},
  repoData: [],
  setOwnerData: (ownerData: IOwner) => set({ ownerData }),
  setRepoData: (repoData: IRepo[]) => set({ repoData }),
}))

export default useStore
