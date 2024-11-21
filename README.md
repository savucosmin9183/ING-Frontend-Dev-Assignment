# ING-Frontend-Dev-Assignment

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

This is a modern web application built with [open-wc](https://open-wc.org/), leveraging best practices for building efficient web components using Lit and Vaadin Router.

## Features

- Built with LitElement for reusable web components.
- Uses [Vaadin Router](https://vaadin.com/router) for managing routes.
- Custom form validations with [Lion Forms](https://github.com/ing-bank/lion).
- Component-based architecture, allowing easy extensibility.
- Functional login form with input validation.
- Secure routing and user session management (login/logout).
- Unit tests with Web Test Runner and Chai for assertions.

# Quickstart

To get started with this application, follow these steps:

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 10+)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Install Dependencies

Run the following command to install the dependencies:

```bash
npm install
```

## Run the Application

Start the application in development mode with live reloading:

```bash
npm start
```

## Build the Applcation

To create a production build of your app, run:

```bash
npm build
```

This will output the built app in the dist/ directory.

## Run Tests

To run the tests, use:

```bash
npm test
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors