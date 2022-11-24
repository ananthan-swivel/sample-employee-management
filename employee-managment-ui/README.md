

## Getting Started
## * Change the dirctory to 
```
cd employee-management-ui
```
## * Git clone or git pull the repo update

## * Copy .env.local.example to .env.local and change if needed.

## * If you have already project Please update the .env.local file. and update the nodule modules 

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## * For Testing

> ## Note :- Before run Testing and storyBook run backend in Port: 5000 For avoid connection refustion Error

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```


## * For StoryBook

```bash
# Run Storybook
$ yarn storybook

# Build Storybook
$ yarn build-storybook

#OR 
# Run Storybook
$ npm run storybook

# Build Storybook
$ npm run build-storybook

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.