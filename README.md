# UI Framework Showcase - Experiment 3 (Multi-Page with React Router)

A comprehensive React application demonstrating **React Router** implementation with multiple pages, showcasing Material UI and Bootstrap components.

## 🎯 Objective

Understand and implement:
- React Router for client-side navigation
- Multi-page application structure
- Component organization
- Consistent design patterns across pages

## ✨ Key Features

### Pages
- **Home Page** - Showcase of Material UI and Bootstrap components side by side
- **Components Page** - Detailed component library with examples

### Routing
- Dynamic navigation using React Router v7
- Client-side routing without page reloads
- Navigation bar with active route indicators

### UI Components
- Material UI components with custom theme
- Bootstrap components via React Bootstrap
- Alert, Rating, Chips, Cards, and more
- Responsive grid layout

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation with React Router links
│   ├── Footer.jsx       # Footer component
│   └── BootstrapCard.jsx # Reusable Bootstrap card
│
├── pages/
│   ├── Home.jsx         # Home page with component showcase
│   └── Components.jsx   # Detailed components page
│
├── App.jsx              # Main app with Router setup
├── App.css              # Global styles
├── main.jsx
├── index.css
└── vite.config.js
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Material UI 7** - Component library
- **React Bootstrap 2** - Bootstrap integration
- **Vite 7** - Build tool
- **Tailwind/CSS** - Styling

## 🎨 Design Features

- Gradient backgrounds and color schemes
- Smooth hover animations and transitions
- Responsive grid layout
- Consistent color palette:
  - Primary: Indigo (#6366f1)
  - Secondary: Pink (#ec4899)
  - Success: Emerald (#10b981)

## 📝 React Router Implementation

```jsx
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/components" element={<Components />} />
  </Routes>
  <Footer />
</Router>
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎓 Learning Outcomes

- How to set up React Router in a React application
- Creating multiple pages in a SPA
- Navigation patterns and best practices
- Component composition and reusability
- Theme management with Material UI
