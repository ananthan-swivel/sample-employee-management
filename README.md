# sample-employee-management

# Start the API and navigate to employee-managment-api and please flow the that readme file

## Installation

## * Git clone or git pull the repo update
## * Change the dirctory to 
```
cd employee-management-api
```
## * Create an database and collection MongoDB  

## * Import the  employee.json in the MongoDB  
## * Copy .env.example to .env and change the DB Connection details.
## * If you have already project Please update the .env file. and update the nodule modules 


## * Postman collection also added as EMS.postman_collection.json


```bash
$ yarn
```
## For API Swagger
```bash
localhost:<port>/api
```


## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

Open [http://13.212.96.20:5000/api](http://13.212.96.20:5000/api) with your browser to see the result from the Server.


*********************************
---------------------------------

# Start the UI and navigate to employee-managment-ui and please flow the that readme file


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
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result from the local.

Open [http://54.179.26.50:3000/employee/list](http://54.179.26.50:3000/employee/list) with your browser to see the result from the Server.



------------
Both BE and FE are hosted in AWS