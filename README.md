# AdonisJS Starter Kit

A modern, full-stack starter kit built with AdonisJS 6, Inertia.js, React, and Prisma.

## Tech Stack

- **Framework:** AdonisJS 6
- **Frontend:** Inertia.js + React (SSR)
- **Database:** Prisma ORM (PostgreSQL)
- **Authentication:** Session-based Auth
- **Styling:** Tailwind CSS + Shadcn

## Setup

1. **Clone the repository**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy the example environment file to create your local `.env` file.

   ```bash
   cp .env.example .env
   ```

   _Make sure to update the environment variables in `.env` with your database credentials._

4. **Database Migration**
   Run the Prisma migrations to set up your database.

   ```bash
   npx prisma migrate dev
   ```

5. **Start Development Server**
   Start the application in development mode.

   ```bash
   npm run dev
   ```

   Visit http://localhost:3333 to see your app.
