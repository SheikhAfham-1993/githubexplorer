## Github explorer

A [Next.js](https://nextjs.org/) project that uses app router and powered by [TailwindCSS](https://tailwindcss.com/) for responsivness. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Nunito, a custom Google Font.

## Demo

- The project demo is deployed under [Github-explorer](https://githubexplorer-mu.vercel.app/)
- The Storybook is deployed under [Github-explorer-storybook](https://master--653e41ee757efa30138de67d.chromatic.com)
- The graphql documentation [here](https://docs.github.com/en/graphql)

## Getting Started

In order to run this project, you must install [Node.js](https://nodejs.org/en). After installing Node.js you can then use [Npm](https://www.npmjs.com/) to install the dependencies. To install the dependencies follow the below steps:

- Open the project with your selected IDE. ([Visual Studio Code](https://code.visualstudio.com/) is preferred.)
- Open terminal inside the IDE and type below command

```bash
npm install
```

- The above command will install all the dependencies that this project needs.

## Running the project

This project is using [Github GraphQL](https://docs.github.com/en/graphql) which is authenticated via Personal access token. In order to run this project you need to create Personel access token in your Github account. Follow the below steps to create the token

- Go to your Github account
- Go to settings. You will find settings upon clicking your profile image on top right.
- Under settings scroll down to "Developer settings".
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

Now, if you have followed all the instructions above, you can now run the project by executing the below command.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

The project components are also documented via [Storybook](https://storybook.js.org/). To run storybook, open a new terminal and type

```bash
npm run storybook
```

The above command will open storybook in a new browser tab where you can observe different components and their behavior

## Cypress E2E testing

The project also has [Cypress E2E testing](https://www.cypress.io/) scripts. If you want to execute the tests locally, follow below instructions.

- Open terminal and run the command `npm run dev`
- Then open another terminal and run the command `npm run cypress`
- If its your first time running the cypress test, cypress will configure the project. In this project cypress is already configured so you don't have to configure it again.
- After running `npm run cypress`, a window will open. Select E2E testing and chrome as testing browser.

If you want to run the tests on terminal and not via the cypress testing window, then run the below command

`npm run cypress-headless`

This start executing tests inside terminal window.

In order to run the tests locally you must first run the application. By running the application cypress will detect it and start running E2E scripts. In the end you will find the result of the tests

## Improvments

Some minor features which will improve this project, e.g. right now user can only search for any repository via typing the name of the repository. More option to find a repository via language can also be introduced.

Also, the tests are E2E, Cypress can also test the components. This feature will really make this project more stable when component testing are also included.

Moreover storybook also is a form of component testing, if used in an advance way the whole team can make use of this framework to deliver the best UI/UX experience.

This project has various Github actions to automate various tasks for e.g.

- Deploying the storybook to chromatic when push occurs.
- Running Cypress tests on pull requests.
- Deploying the storybook to the master branch when merge occurs.

From the above three actions the merging from dev branch to master is manual right now. What I believe (in theory) is that this can also be achieved via Github Actions. Also pull requests are also created manually this process as well can be taken care by Github actions.

Furthermore, By leveraging the full power of the Github graphQL API, this github explorer project can also be improved by not only showing repositories but also other functionalities such as issues.
