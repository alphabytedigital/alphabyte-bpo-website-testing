--- CONTEXT PACKET ---
Project: AlphaByte BPO Website
Tech Stack: Next.js 15.5.2, React 19.1.0, TypeScript, Tailwind CSS v4

Current Status: The project is stable, and all dependencies are correctly installed. The codebase is reverted to the last stable commit from Saturday, with all static pages (Home, Services, Packages, How It Works, Contact) complete and linked. The website is structurally finished and ready for visual enhancements.

File Structure: All page routes are under src/app/. All components are under src/components/.

Current package.json:

JSON

 {
  "name": "alphabyte-bpo-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.2.12",
    "lenis": "^1.1.5",
    "next": "15.5.2",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.1.0",
    "@tailwindcss/postcss": "4.0.0-alpha.13",
    "@types/node": "^20",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "eslint": "^9.5.0",
    "eslint-config-next": "15.5.2",
    "postcss": "^8.4.38",
    "tailwindcss": "4.0.0-alpha.13",
    "typescript": "^5"
  }
}
Next Step: Proceed with a safe and compatible plan to implement the desired features (promo banner, smooth scroll, full-screen sections, dynamic navbar, and hero background animation) using the current, stable tech stack.