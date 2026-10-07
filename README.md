# Personal Portfolio

My personal portfolio website, built to showcase my experience, projects, and transition from Technical Support into Software Engineering.

## Live Website

**Portfolio:** https://willviana-portfolio.vercel.app/

**GitHub:** https://github.com/willvviana/my-portfolio

## Overview

This project is a full-stack personal portfolio built with React, TypeScript, Node.js, and PostgreSQL.

The main goal is to create a simple, functional, and maintainable portfolio while also using the project as a practical way to develop my software engineering skills.

The project covers:

* Frontend development with React and TypeScript
* Backend API development with Node.js and Express
* REST API design
* PostgreSQL database integration
* Git and GitHub workflow
* Frontend and backend deployment
* Environment variable configuration
* Basic project architecture and separation of concerns

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* CSS

### Backend

* Node.js
* Express
* TypeScript
* REST API
* CORS

### Database

* PostgreSQL

### Tools & Deployment

* Git
* GitHub
* Vercel
* Render
* VS Code

## Project Structure

```text
my-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   ├── sections/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── routes/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

## Architecture

The project is divided into two main applications:

```text
Frontend
React + TypeScript
        │
        │ HTTP requests
        ▼
Backend
Node.js + Express
        │
        │
        ▼
PostgreSQL
```

The frontend is responsible for the user interface and user interaction.

The backend provides the API layer and handles server-side functionality.

PostgreSQL is used for persistent data storage and is currently configured for local development.

## API

The backend currently exposes:

### Health Check

```http
GET /api/health
```

Response:

```json
{
  "status": "ok",
  "message": "Portfolio API is healthy"
}
```

### Root Endpoint

```http
GET /
```

Response:

```json
{
  "message": "Portfolio API is running"
}
```

## Local Development

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git
* PostgreSQL

### Clone the repository

```bash
git clone https://github.com/willvviana/my-portfolio.git
cd my-portfolio
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available through the local Vite development server.

### Backend

Open a second terminal:

```bash
cd backend
npm install
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

### Production Build

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```bash
cd backend
npm run build
```

## Environment Variables

The frontend uses:

```env
VITE_API_URL=http://localhost:3000
```

For production, the API URL is configured through the Vercel environment variables.

Local backend database credentials are stored in a `.env` file and are intentionally excluded from Git.

Example:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=portfolio_db
DB_PASSWORD=your_password
DB_PORT=5432
```

## Deployment

The project is deployed using separate services for the frontend and backend.

### Frontend

Hosted on Vercel:

https://willviana-portfolio.vercel.app/

### Backend

Hosted on Render:

https://my-portfolio-api-wp16.onrender.com/

The GitHub repository is connected to both deployment platforms, allowing new deployments to be triggered automatically when changes are pushed to the `main` branch.

## Current Status

The core portfolio and API are deployed and working.

The PostgreSQL database is currently configured for local development. Production database integration is intentionally postponed until a suitable persistent database solution is selected.

Because of this, the contact form's database functionality is currently not enabled in production.

The local database implementation and contact API code are preserved in the project for a future production database integration.

## Future Improvements

Planned improvements include:

* Re-enable the contact form with a persistent production database
* Add automated tests
* Add Docker support
* Improve responsive design
* Add light/dark mode support
* Improve API validation and error handling
* Add additional portfolio projects
* Further improve accessibility
* Continue refining the project architecture

## Purpose

This project is not only a personal website but also a practical software engineering project.

It is being developed to demonstrate my progression from Technical Support toward Software Engineering while applying concepts such as frontend development, backend development, APIs, databases, deployment, and software architecture.
