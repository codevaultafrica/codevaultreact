# CodeVault Africa - React Application

A modern, responsive React application for CodeVault Africa showcasing software solutions and digital transformation services.

## Project Structure

```
codevault-africa/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   ├── Frameworks.js
│   │   ├── Awards.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Features

- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Modern React Components**: Clean, reusable component architecture
- **Smooth Animations**: CSS animations and transitions throughout
- **Interactive Navigation**: Mobile menu toggle and smooth scrolling
- **African-Themed Design**: Custom African map background and green color scheme
- **Performance Optimized**: Efficient React hooks and event handling

## Components Overview

### Header Component
- Fixed navigation with mobile menu toggle
- Smooth scroll effects
- Active state management for mobile menu

### Hero Component
- Animated African map background
- Statistics display with shimmer effects
- Gradient text effects

### Services Component
- Grid layout for service cards
- Hover animations and transforms
- Icon-based service representation

### Projects Component
- Project showcase with image placeholders
- Hover effects and shadows
- Responsive grid layout

### Frameworks Component
- Custom framework solutions display
- Glassmorphism design effects
- Gradient backgrounds

### Awards Component
- Recognition and awards display
- Icon-based award representation
- Hover animations

### Footer Component
- Comprehensive contact information
- Multi-column layout
- Social links and company info

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Create a new React app directory:
```bash
mkdir codevault-africa
cd codevault-africa
```

2. Copy all the provided files into their respective directories according to the project structure above.

3. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:
```bash
npm run build
```

## Customization

### Colors
The application uses a green-based color scheme with the primary color `#2ecc71`. You can modify colors in `App.css`:

- Primary Green: `#2ecc71`
- Secondary Green: `#27ae60`
- Background Dark: `#1a1a1a`
- Card Background: `#2d2d2d`

### Content
Update content in the respective component files:
- Company information in `Footer.js`
- Services in `Services.js`
- Projects in `Projects.js`
- Awards in `Awards.js`

### Styling
All styles are contained in `App.css`. The CSS uses:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for consistent theming
- CSS Animations for interactive effects
- Media queries for responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized animations using CSS transforms
- Efficient React state management
- Minimal re-renders with proper event handling
- Responsive images and backgrounds

## Deployment

The application can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

For deployment, use:
```bash
npm run build
```

Then upload the `build` folder to your hosting service.

## License

This project is proprietary to CodeVault Africa. All rights reserved.