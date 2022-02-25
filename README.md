# nextjs-typescript-tailwind-starter

Starter codebase for Nextjs using Typescript and Tailwind Components

## Getting Started

### Requirements

- Node.js and npm

### Getting started

* Clone the repo
* Install dependencies by running the command in the repo
```
npm install
```
* Then, you can run locally in development mode with live reload:

```
npm run dev
```
* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Notes

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Directory Structure
```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
├── components           # Components
├── layout               # Atomic layout component
├── pages                # Next JS pages
├── styles               # PostCSS style folder with Tailwind
├── utils                # Utility folder
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```