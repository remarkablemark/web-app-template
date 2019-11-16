# web-app-template

A web app template that is framework agnostic.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) but dependencies like React have been removed.

[View app.](https://remarkablemark.github.io/web-app-template/)

## Prerequisites

- [Node.js 8.6+](https://nodejs.org/en/download/)
- [npm 5.3+](https://www.npmjs.com/get-npm) or [Yarn 1+](https://yarnpkg.com/lang/en/docs/install/)

## Installation

Clone repository:

```sh
$ git clone https://github.com/remarkablegames/web-app-template.git
```

Rename project:

```sh
$ mv web-app-template my-app
$ cd my-app
$ git grep -l web-app-template | xargs sed -i '' -e 's/web-app-template/my-app/g'
$ git grep -l 'Web App Template' | xargs sed -i '' -e 's/Web App Template/My App/g'
```

You should also update the following files:

- [ ] README.md
- [ ] package.json
- [ ] public/index.html
- [ ] public/manifest.json
- [ ] src/index.js

Install dependencies:

```sh
$ npm install
```

Initialize new repository:

```sh
$ rm -rf .git
$ git init
```

Make first commit:

```sh
$ git add .
$ git commit -m "feat: initialize project from web-app-template"
```

> Commit messages follow the [Conventional Commits](https://conventionalcommits.org/) format, which is used when releasing a new version.

Don't forget to [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) or to another remote repository:

```sh
$ git remote add origin <remote-repository-url>
$ git push origin -u origin master
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run release`

Bumps the `package.json` using [standard-version](https://github.com/conventional-changelog/standard-version).

### `npm run deploy`

Deploys the app to [GitHub Pages](https://pages.github.com/) by force pushing the `build` folder to the remote repository's `gh-pages` branch.

## Environment Variables

Environment variables work the same as [create-react-app](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables) except the custom environment variables begin with `APP_` instead of `REACT_APP_`.

## Test

There are no tests, just linting:

```sh
$ npm run lint
$ npm run lint:fix
```

Feel free to add a [testing framework](https://github.com/sorrycc/awesome-javascript#testing-frameworks) of your choice.

You try to build the production app locally before deploying it:

```sh
# git stash
$ sed -i '' '/homepage/d' package.json
$ npm run build
# git checkout -- package.json
# git stash pop
```

Start a local server:

```sh
$ cd build
$ python -m SimpleHTTPServer
# press `Ctrl + C` to stop the server
```

View static page:

```sh
$ open http://localhost:8000
```

## Layout

Directory structure (dotfiles are omitted):

```sh
$ tree -I 'build|node_modules'
.
├── LICENSE
├── README.md
├── config
│   ├── env.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── scripts
│   ├── build.js
│   └── start.js
└── src
    ├── index.css
    ├── index.js
    └── serviceWorker.js

4 directories, 20 files
```

## Diff

Compared to `create-react-app`, the additional dependencies saved to `package.json` are:

- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [@commitlint/{cli,config-conventional}](https://github.com/conventional-changelog/commitlint)
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [gitploy](https://github.com/remarkablemark/gitploy)
- [husky](https://github.com/typicode/husky)
- [jsonlint](https://github.com/zaach/jsonlint)
- [lint-staged](https://github.com/okonet/lint-staged)
- [prettier](https://github.com/prettier/prettier)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## License

[MIT](LICENSE)
