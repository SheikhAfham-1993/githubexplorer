export function returnQuery(userName: string): string {
  return `
query {
  user(login: "${userName}") {
    avatarUrl
    name
    login
    bio
    socialAccounts(first:100) {
      nodes{
        provider
        displayName
      }
    }
    location
    company
    followers{
      totalCount
    }
    following{
      totalCount
    }
    repositories(first:100) {
      nodes {
        pushedAt
        name
        url
        visibility
        description
        forkCount
        stargazerCount
        languages(first: 100) {
          nodes {
            name
            color
          }
        }
      }
    }
  }
}
`
}
