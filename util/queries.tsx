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
    repositories(first:100) {
      nodes {
        pushedAt
        name
        url
        visibility
        description
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
