# Job Portal Project

A frontend job portal application built with React, Vite, Tailwind CSS, and Clerk authentication. The project is aimed at creating a clean job-search experience where users can browse roles, sign in, and eventually apply to jobs and manage their applications from a single dashboard.

At its current stage, the repository contains the client-side application, seeded job data, basic navigation, authentication wiring with Clerk, and the first set of pages for a job portal workflow.

## Overview

This project is designed as a modern job board interface with:

- a public landing page
- a hero section for job search inputs
- authentication using Clerk
- seeded data for jobs, applications, and recruiter-facing views
- route structure for home, apply-job, and applications pages

The codebase is still in progress, so some routes and data models already exist while a few pages are still placeholders waiting for the next build steps.

## Current Features

- Clerk-based authentication integrated at the app root
- login modal trigger from the navbar
- signed-in user state in the navigation bar
- safe username fallback for new users without first and last names
- landing page with hero search UI
- trusted-company brand section
- seeded asset/data file for jobs, locations, categories, and sample application records
- client-side routing with `react-router-dom`
- Tailwind CSS styling via Vite plugin

## Planned / Incomplete Features

These parts are suggested by the current structure but are not fully implemented yet:

- real job search and filtering logic
- job details page rendering for `/apply-job/:id`
- applications dashboard UI and logic
- recruiter workflows
- backend/database integration
- form submission and persistent job applications
- global app state in `AppContext`

## Tech Stack

### Frontend

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- Clerk React
- React Toastify
- Quill

### Tooling

- ESLint
- PostCSS
- Autoprefixer

## Project Structure

```text
Job-Portal-Project/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## Important Files

- [README.md](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/README.md)  
  Main project documentation.

- [client/src/main.jsx](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/src/main.jsx)  
  App entry point. Registers `ClerkProvider`, `BrowserRouter`, and `AppContextProvider`.

- [client/src/App.jsx](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/src/App.jsx)  
  Defines the main client routes.

- [client/src/components/Navbar.jsx](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/src/components/Navbar.jsx)  
  Handles login UI, signed-in state, and user display name fallback.

- [client/src/components/Hero.jsx](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/src/components/Hero.jsx)  
  Renders the top landing-page section with search inputs.

- [client/src/assets/assets.js](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/src/assets/assets.js)  
  Central place for static assets and sample portal data.

- [client/src/context/AppContext.jsx](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/src/context/AppContext.jsx)  
  Reserved for shared app state. Currently minimal.

## Routes

The following client routes are defined:

- `/` -> Home page
- `/apply-job/:id` -> Apply/job details page placeholder
- `/applications` -> Applications page placeholder

## Authentication

Authentication is powered by Clerk through `@clerk/react`.

The app expects a Clerk publishable key in the client environment:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

If this variable is missing, the app throws an error during startup.

### Current Auth Behavior

- signed-out users see a `Login` button in the navbar
- clicking `Login` opens Clerk sign-in
- signed-in users see:
  - an `Applied Jobs` link
  - a greeting in the navbar
  - Clerk's `UserButton`

### New User Name Fallback

Some new Clerk users may not have `firstName` and `lastName` populated immediately. The navbar now falls back in this order:

1. `firstName + lastName`
2. `fullName`
3. `username`
4. email prefix before `@`
5. `"there"`

That prevents `null null` from appearing for fresh accounts.

## Sample Data

The app currently relies on seeded frontend data from `client/src/assets/assets.js`.

This includes:

- job categories
- job locations
- sample jobs
- sample applied jobs
- sample applicant data
- shared image/icon assets

This is useful for UI development before backend integration is added.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm
- a Clerk account and publishable key

### Installation

Clone the repository:

```bash
git clone https://github.com/gannu19/Job-Portal-Project.git
cd Job-Portal-Project
```

Install client dependencies:

```bash
cd client
npm install
```

### Environment Setup

Create a `.env` file inside the `client` folder and add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Run the Development Server

From the `client` directory:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

Inside the `client` folder:

- `npm run dev`  
  Starts the Vite development server.

- `npm run build`  
  Creates a production build.

- `npm run preview`  
  Serves the production build locally.

- `npm run lint`  
  Runs ESLint checks.

## Styling

The UI is styled with Tailwind CSS through the Vite Tailwind plugin configured in:

- [client/vite.config.js](c:/Users/bhuky/OneDrive/Desktop/Job-Portal-Project/client/vite.config.js)

## Development Notes

- The root `package.json` currently does not manage the client app scripts. Most active development happens inside the `client` directory.
- `AppContext` exists but does not yet expose shared state or methods.
- `ApplyJob` and `Applications` pages are currently placeholders.
- The hero search inputs are presentational for now and are not yet connected to filtering logic.

## Suggested Next Steps

If you want to continue this project, a practical next roadmap would be:

1. Add a jobs listing section on the home page using `jobsData`.
2. Build the `/apply-job/:id` page to display job details.
3. Connect the search inputs to category/location filtering.
4. Build the `/applications` dashboard using the seeded application data.
5. Expand `AppContext` for shared jobs/auth/application state.
6. Add backend integration for persistent jobs and applications.
7. Add protected routes for signed-in users.
8. Add recruiter-facing flows for posting and managing jobs.

## Known Limitations

- no backend or database integration yet
- no persistent application storage
- some pages are stubs
- search is not functional yet
- no tests are configured yet

## Repository

- Repository URL: `https://github.com/gannu19/Job-Portal-Project`

## License

This repository currently uses the `ISC` license as declared in the root `package.json`.

## Author

The root `package.json` currently has no author value set. You can update that later if you want to personalize the project metadata for GitHub or deployment.
