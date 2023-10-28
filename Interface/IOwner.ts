export interface ISocialAccounts {
  provider: 'LOCATION' | 'YOUTUBE' | 'LINKEDIN' | 'WEBSITE'
  displayName: string
}

interface IName {
  name?: string
}

export interface ILanguages extends IName {}

export interface IRepositories extends IName {
  pushedAt: Date
  url: string
  description?: string
  visibility: string
  languages?: {
    nodes: ILanguages[]
  }
}
export interface IUserData extends IName {
  avatarUrl?: string
  login?: string
  bio?: string
  socialAccounts: {
    nodes?: ISocialAccounts[]
  }
  location?: string
  company?: string
  repositories?: {
    nodes?: IRepositories[]
  }
}
