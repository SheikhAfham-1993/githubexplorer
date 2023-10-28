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
        url
      }
    }
    location
    company
    repositories(first:100) {
      nodes {
        updatedAt
        name
        url
        visibility
        languages(first: 100) {
          nodes {
            name
          }
        }
      }
    }
  }
}
`
}
