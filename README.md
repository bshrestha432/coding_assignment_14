# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5575] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Build for Production:

# `npm run build`

troubleshoot:

### `rm -rf node_modules`
### `rm package-lock.json`
### `npm install`

deploying the app:

### `npm install --save gh-pages`

add the following to package.json file

### `"homepage": "http://github.com/bshrestha432/portfolio-website",`

add deployment scripts

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

run the deploy script

### `npm run display`



