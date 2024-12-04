# Study Notion

A ReactJS application for learning and note-taking.

## Features

* User authentication and authorization
* Note-taking and organization
* Tagging and categorization of notes
* Search functionality
* Responsive design for mobile and desktop

## Usage

1. Clone the repository to your local machine
2. Install the required dependencies using `npm install` or `yarn install`
3. Start the application using `npm start` or `yarn start`
4. Open the application in a web browser at `http://localhost:3000`

## Code Structure

The code is organized into the following folders:

* `src`: contains the source code for the application
* `src/components`: contains reusable React components
* `src/pages`: contains page-level components
* `src/context`: contains the application context
* `src/hooks`: contains custom hooks for data fetching and authentication
* `src/assets`: contains static assets such as images and fonts

## Components

The following components are used in the application:

* `App`: the main application component
* `Navbar`: the navigation bar component
* `Notes`: the component for displaying and editing notes
* `Tags`: the component for managing tags and categories
* `Search`: the component for searching notes

## Context

The application uses a custom context for managing state and authentication:

* `AuthContext`: provides authentication and authorization functionality
* `NoteContext`: provides note-related functionality

## Hooks

The application uses custom hooks for data fetching and authentication:

* `useAuth`: a hook that provides authentication functionality
* `useNotes`: a hook that provides note-related functionality

## API

The application uses a mock API for data fetching. The API is accessed using the `axios` library.

## License

This code is licensed under the MIT License.