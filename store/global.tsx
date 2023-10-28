import { IUserData } from '@/Interface/IOwner'

import { create } from 'zustand'

type Repository = {
  userData: IUserData | undefined
  setUserData: (userData: IUserData | undefined) => void
}
let useStore = create<Repository>((set) => ({
  userData: undefined,
  ownerData: undefined,
  repoData: [],
  setUserData: (userData: IUserData | undefined) => set({ userData }),
}))

export default useStore
