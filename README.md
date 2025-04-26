# Movie App React Project

A simple React app that displays a grid of movies and allows users to view detailed information, including an embedded YouTube trailer.

## Features
- Homepage with a responsive grid of movies
- Detail page for each movie
- Embedded YouTube trailer player
- Built with React, React Router, and TailwindCSS

## Project Structure
```
/src
  /components
    MovieCard.tsx
  /pages
    HomePage.tsx
    DetailPage.tsx
  App.jsx
  movies.json
```

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn installed

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/movie-app-react.git
```

2. Navigate into the project directory:
```bash
cd movie-app-react
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app should now be running at [http://localhost:5173](http://localhost:5173) if using Vite.

## TailwindCSS Setup
This project assumes TailwindCSS is installed. If not, install it by following these steps:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then configure `tailwind.config.js` and add Tailwind to your `index.css`.

Example `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Future Improvements
- Fetch movies from an API
- Improve error handling
- Add loading states
- Add a search or filter feature

## License
MIT License.

