# React Web Developer Recruitment Homework Documentation

## 1. Introduction

The React Web Developer Recruitment Homework is a modern, responsive web application designed to showcase products retrieved from an API. It demonstrates your skills in React, TypeScript, and modern tooling like TanStack React Query and TanStack Router. The application uses Vite for a fast development experience and ChadCN (shadcn/ui) for consistent and customizable UI components.

This documentation provides a step-by-step guide for setting up, running, and understanding the project.

## 2. Libraries and Technologies Used

- React: Frontend framework.
- TypeScript: Type safety and development support.
- TanStack React Query: For managing API data fetching, caching, and state.
- Axios: HTTP client for making API requests.
- ChadCN (shadcn/ui): For components and UI styling with Sass.
- Commitizen: For standardized Git commits.
- Yarn: Package manager.
- Node.js (v20.10.0): Runtime environment.

## 3. Installation

### Prerequisites:

- Node.js v20.10.0(v20 or higher)
- Yarn or npm (recommended)

### Steps to Install and Run:

**1. Clone the repository:**

`git clone <repository-url>`

`cd <repository>`

**2. Install dependencies using Yarn:**

`yarn install`

**3. Start the development server:**

`yarn start`

**4. Build the project for production:**

`yarn build`

## 4. Project Structure

![image](https://github.com/user-attachments/assets/1c2ca5d2-c6bf-49c4-b8bc-8e17bca8223a)

- **Component-based architecture:** The application is built using a modular approach where each UI component is self-contained.
- **TanStack React Query for state management:** State is centralized and managed through TanStack React Query store, allowing for reactivity and cleaner code.
- **Separation of concerns:** Services handle business logic and API interactions, while components focus on rendering UI elements.

## 5. Design Pattern

![image](https://github.com/user-attachments/assets/7180cb52-ed95-4158-9fc6-7d1e2900268d)

This architectural blueprint for a React project demonstrates a well-organized and efficient structure where reusable components, built with TypeScript interfaces and styled using Sass, form the foundation. These components are utilized by various pages, which then communicate with the TanStack React Query store. The store acts as the **single source of truth**, ensuring consistent and centralized state management across the application. Service functions, invoked by the store, handle the logic and processing needed before interacting with external APIs. This flow ensures a clear separation of concerns, promotes reusability, and maintains a robust and scalable architecture, enhancing both development and maintenance efficiency.

## 6. Usage

### List of products:

- Get all products with pagination support.

### State Management:

- TanStack React Query is used to manage the application state across components, providing reactive updates to the user interface.

## 7. Version Control

The project follows a standardized commit message format using Commitizen to ensure consistent and readable commit messages.

### To push the code:

1. Stage your changes:

`git add .`

2. Create a commit using Commitizen by running:

`yarn run commit`

This will guide you through a series of prompts to format your commit message properly.

3. Push the commit to the repository:

`git push origin <branch-name>`
