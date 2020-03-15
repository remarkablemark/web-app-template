#!/bin/bash

# ensure working index is clean
stash_output=$(git add . && git stash)

# remove `build` folder
npm run clean

# build production artifacts
npm run build

# deploy `build` contents to remote branch `gh-pages`
if [[ $(command -v npx) ]]; then
  npx gitploy build gh-pages
else
  $(npm bin)/gitploy build gh-pages
fi

# return working index to initial state (if applicable)
if [[ $stash_output != 'No local changes to save' ]]; then
  git stash pop
fi
