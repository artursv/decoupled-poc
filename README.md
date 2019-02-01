# Decoupled Drupal proof of concept

React application with Drupal as datasource. This setup uses [GraphQL](https://www.drupal.org/project/graphql) module to expose content to the React application. The main goal for creating this was to explore the potential pitfalls when building accessability focused React application.

## Requirements

- [npm](https://www.npmjs.com/get-npm)
- [Lando](https://github.com/lando/lando)

## Setup

### React

  cd frontend
  npm install
  npm start

### Drupal

  cd drupal
  lando start
  lando build.sh reset
