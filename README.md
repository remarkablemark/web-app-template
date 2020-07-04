# web-app-template

Framework agnostic web app template.

This project is like [CRA](https://github.com/facebook/create-react-app) app except React is removed.

[View web app.](https://remarkablemark.github.io/web-app-template/)

## Prerequisites

- [Node.js >=10](https://nodejs.org/en/download/)
- [npm >=5.6](https://www.npmjs.com/get-npm) or [Yarn >=1](https://yarnpkg.com/lang/en/docs/install/)

## Installation

Clone the repository:

```sh
git clone https://github.com/remarkablemark/web-app-template.git
```

Rename the project (replace `my-app` and `My App` with your app name):

```sh
mv web-app-template my-app && cd $_
git grep -l web-app-template | xargs sed -i '' -e 's/web-app-template/my-app/g'
git grep -l 'Web App Template' | xargs sed -i '' -e 's/Web App Template/My App/g'
```

Update the files:

- [ ] `README.md`
- [ ] `package.json`
- [ ] `public/index.html`
- [ ] `public/manifest.json`
- [ ] `src/index.js`

Install the dependencies:

```sh
npm install
```

Initialize a new repository:

```sh
rm -rf .git
git init
```

Make your first commit:

```sh
git add .
git commit -m "feat: initialize project from web-app-template"
```

> Commit messages follow the [Conventional Commits](https://conventionalcommits.org/) format, which is used during release.

Once you're ready, [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) (or another remote repository):

```sh
git remote add origin <remote-repository-url>
git push origin -u origin master
```

## Migration

Migrate your web app to use [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration
```

See [article](https://remarkablemark.org/blog/2020/06/06/web-app-template/#migration) or [web-scripts-migration](https://www.npmjs.com/package/web-scripts-migration).

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

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.

### `npm run release`

Bumps the `package.json` version with [standard-version](https://github.com/conventional-changelog/standard-version).

### `npm run deploy`

Deploys the app to [GitHub Pages](https://pages.github.com/) by force pushing the `build` folder to the remote repository's `gh-pages` branch.

## Environment Variables

Environment variables work similarly to [Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/) except they begin with `WEB_APP_` instead of `REACT_APP_`.

For example:

```
# .env
WEB_APP_VERSION=$npm_package_version
WEB_APP_DOMAIN=www.example.com
WEB_APP_FOO=$DOMAIN/foo
```

## Testing

Tests are run just like [Create React App](https://create-react-app.dev/docs/running-tests):

```sh
npm test
```

## Build

You can build the production app locally:

```sh
npm run build

# if your app is hosted at a subdirectory
mv build $(node -p "require('./package').name") # web-app-template

# if your app is hosted at the root
cd build
```

Start the server:

```sh
python -m SimpleHTTPServer
```

Stop the server with `Ctrl + C`.

View the app in a new Terminal tab or window:

```sh
open http://localhost:8000
# if your app is hosted at a subdirectory, make sure to open the directory
```

Don't forget to clean up the build directory after you're done:

```sh
# if your app is hosted at a subdirectory
rm -rf $(node -p "require('./package').name") # web-app-template

# if your app is hosted at the root
rm -rf build
```

## Layout

Directory structure (with dotfiles omitted):

```sh
tree -I 'build|node_modules'
.
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── index.css
    ├── index.js
    └── serviceWorker.js

2 directories, 12 files
```

## License

[MIT](LICENSE)
