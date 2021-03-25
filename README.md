# Interview Scheduler
A React based interview scheduler. Users can schedule up to 5 interviews per day, choose their interviewer, and create, edit, or delete appointments. Scheduler makes API requests with axios to load and persist interview data. Testing is accomplished using Storybook, Jest, and Cypress. 

## Book an interview

![book interview]()

## Edit an interview

![edit interview]()

## Cancel an interview

![cancel interview]()

## User feedback

![saving feedback]()

## Confirm destructive actions

![confirm delete]()

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

The development server runs on port 8000

## Running Scheduler API

[Fork and clone the API from here](https://github.com/lighthouse-labs/scheduler-api)

```sh
npm start
```

The API server runs on port 8001
Note: the API server and the development server must be run in separate terminal windows

## Running Jest Test Framework

```sh
npm test
```

Scheduler has built in Jest unit testing.

## Running Storybook Visual Testbed

```sh
npm run storybook
```

Scheduler uses Storybook for building components.


