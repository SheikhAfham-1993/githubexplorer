import { IUserData } from '../Interface/IOwner'

import { create } from 'zustand'

type Repository = {
  isLoading: boolean
  userData: IUserData | undefined
  setIsLoading: (isLoading: boolean) => void
  setUserData: (userData: IUserData | undefined) => void
}
let useStore = create<Repository>((set) => ({
  userData: undefined,
  ownerData: undefined,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  repoData: [],
  setUserData: (userData: IUserData | undefined) => set({ userData }),
}))

export default useStore
