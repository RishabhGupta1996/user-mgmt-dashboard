# user-mgmt-dashboard
A simple user management project
Secure User Management Dashboard

This project is a Secure User Management Dashboard built using Vue.js, TypeScript, Tailwind CSS, and Pinia.

Steps Taken

Project Setup

Initialized a new Vue project with TypeScript.
Configured Pinia as the state management solution.
Integrated Tailwind CSS and configured it for use within the project.
HTTP Service Setup

Created reusable HTTP services for user authentication and data retrieval using the ReqRes REST API.
Page Implementation

Implemented Sign In, Sign Up, and Protected Dashboard pages.
Used Pinia stores for managing user authentication and data state.
Implemented middleware for protecting the dashboard page to ensure it's only accessible to authenticated users.
Created and utilized components for common UI elements, such as forms and modals.
Utilized named slots to improve component reusability.
Unit Testing

Wrote unit tests for critical parts of the application, including authentication logic and HTTP service interactions.
