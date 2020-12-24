# Getting Started with People Management App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App is built using:

HTML,
CSS,
Javascript,
React,
webpack,
Jest

## To run App

### Prerequisite

Node
NPM

## Clone

git@github.com:sagarbasavaraj/people-management.git

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Description

People Mangement  - App to manage people. User can create, read and edit person informations.

## Development

Main branch is used for developement. Ideally need to use feature branches and raise PR to main branch.


Code base is structured based on screens (ex. home, add-edit-people). All related files are grouped together and kept in one folder. In this way it is easy to find files and also helps others to understand the code base easily.

All the file names follow kabab case (ex., <>-<>.js) naming convention.

Component based design is followed.
```
src
- common
    - components - contain all common components
    - helpers - contain all common helpers
- home
    - home.js - Main container reponsible for fetching data and feeding to child components.
    - components
        - page-header - Displays page header
        - people-list - Displays people informations.
        - people-list-header - Displays list header
        - people-list-item - Display each people item.
        - people-list.scss
    - home.test.js
- add-edit-person
    - add-edit-person.js - Component used to add and edit people.
    - components
        - employee-form.js
    - validations.js
    - add-edit-person.scss
    -add-edit-person.test.js
- hooks - Contains common hooks
    - use-data-api: Custom hook to manage fetch and save operations
    - use-form: Custom hook to handle form data
    - use-navigate: Custom hook to handle navigation
- design-tokens: Css design tokens
    - variables.scss - contains common css themes and fonts used across the application.
-service: Contains common services used across the applications.
    - storage-sevrice - Service used to store and fetch data
  

```
### Note

App uses Indexdb to store data locally. No server is used. This is just for assignment purpose.

## Improvements
- Typescript can be used. For assignment purpose used JS.
- TextInput can be enhanced to handle basic vaildations and also formatting content.
- Dropdown component can be enhanced to handle keyboard events.
- Internationalization support.
- create story book for common components. It helps new joiness to understand components and play around with it.
- sass features can be used to automate padding, margin and border.