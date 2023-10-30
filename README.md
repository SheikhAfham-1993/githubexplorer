## Github explorer

A [Next.js](https://nextjs.org/) project that uses app router and powered by [TailwindCSS](https://tailwindcss.com/) for responsivness. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Nunito, a custom Google Font.

## Getting Started

In order to run this project, you must install [Node.js](https://nodejs.org/en). After installing Node.js you can then use [Npm](https://www.npmjs.com/) to install the dependencies. To install the dependencies follow the below steps:

- Open the project with your selected IDE. ([Visual Studio Code](https://code.visualstudio.com/) is preferred.)
- Open terminal inside the IDE and type below command

```bash
npm install
```

- The above command will install all the dependencies that this project needs.

## Running the project

This project is using [Github GraphQL](https://docs.github.com/en/graphql) which is authenticated via Personal access token. In order to run this project you need to create Personel access token in you github account. Follow the below steps to create the token

- Go to your github account
- Go to settings. You fill find settings upon clicking you profile image on top right.
- Under settings scroll down to "Develop settings".
- Then click on Personal access token and select "Tokens (classic)".
- Under Tokens (classic), click on Generate new token. Click on the (classic) option.
- Github will then need your confirmation by requiring your password.
- Give your token any note.
- Select scopes that you want this token for. For this project just enable "public_repo" under repo.
- Click Generate token, copy the token and save it somewhere because it is only visible once.

## Create .env.local file

Under the root of your project, create a new file called ".env.local". The file should be named this way as Next.js read local environment variables from this file.

Under ".env.local", add the following key

```bash
NEXT_PUBLIC_GITHUB_TOKEN=YOUR-PERSONAL-ACCESS-TOKEN
```

Replace "YOUR-PERSONAL-ACCESS-TOKEN" with your generated token that you created.

## Executing the project

Now, if you have followed all the instructions above, you can now run the project by running

```bash
npm run dev
```

## Storybook

The project components are also documented via Storybook. To run storybook, open a new terminal and type

```bash
npm run storybook
```

The above command will open storybook in a new browser tab where you can observe different components and their behavior

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
