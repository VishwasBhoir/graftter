# 🍔 Grafter Landing Page

A fully responsive, pixel-perfect landing page for **Grafter** - a restaurant technology platform. Built with React and Vite, featuring dynamic data loading and an interactive product carousel.

---

## 📚 Table of Contents

- [Tech Stack](#-tech-stack)
- [Setup Instructions](#-setup-instructions)
- [Project Approach](#-project-approach)
- [Features Implemented](#-features-implemented)
- [Project Structure](#-project-structure)
- [Component Overview](#-component-overview)
- [Data Flow](#-data-flow)
- [Carousel Features](#-carousel-features)
- [Responsive Design](#-responsive-design)
- [Screenshots](#-screenshots)
- [Assumptions & Decisions](#-assumptions--decisions)

---

## 🛠️ Tech Stack

### **Chosen: React 18 + Vite**

**Why React?**
- ✅ Component-based architecture
- ✅ Reusable hooks for data fetching and carousel logic
- ✅ Efficient state management
- ✅ Large ecosystem and community support
- ✅ Perfect for interactive UI components like carousels

**Technology Details:**
- **Framework**: React 18 (Functional Components + Hooks)
- **Build Tool**: Vite (Fast, modern development)
- **Styling**: CSS Modules (No inline styles, scoped styling)
- **Package Manager**: npm
- **Node Version**: 14+ recommended

**Dependencies:**
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

---

## 📦 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VishwasBhoir/graftter.git
   cd graftter
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:5173` (default Vite port)
   - Hot Module Replacement (HMR) enabled for instant updates

4. **Build for Production**
   ```bash
   npm run build
   ```
   - Creates optimized build in `dist/` folder

5. **Preview Production Build**
   ```bash
   npm run preview
   ```
   - Test production build locally

6. **Run Linter** (Optional)
   ```bash
   npm run lint
   ```
   - Check code quality with ESLint

---

## 🎯 Project Approach

### Design-First Development

The project was built following the Figma design reference with a pixel-perfect approach:

1. **Design Analysis**
   - Analyzed Figma design for exact specifications
   - Extracted color values, spacing, typography
   - Identified responsive breakpoints

2. **Component Architecture**
   - Decomposed UI into reusable components
   - Separated concerns (UI, logic, data)
   - Created custom hooks for business logic

3. **Data-Driven Approach**
   - All content is dynamically loaded from `content.js`
   - No hardcoded text in components
   - Easy to update content via data file

4. **Responsive-First**
   - Mobile-first CSS approach
   - Three breakpoints: mobile, tablet, desktop
   - All components tested on multiple screen sizes

### Implementation Strategy

#### Phase 1: Structure
- Created semantic HTML components
- Established CSS Module structure
- Set up data layer with mock API

#### Phase 2: Hero Section
- Built headline with gradient text
- Implemented responsive CTA button
- Added loading and error states

#### Phase 3: Features Section & Carousel
- Designed carousel with circular navigation
- Implemented responsive grid (3/2/1 items)
- Added smooth CSS animations
- Integrated product images

#### Phase 4: Polish & Optimization
- Added hover effects and transitions
- Optimized image loading
- Fine-tuned responsive behavior
- Cross-browser testing

---

## ✨ Features Implemented

### Hero Section
- ✅ Gradient text effect on "technology provider?"
- ✅ Prominent CTA button with gradient background
- ✅ Responsive heading and subheadline
- ✅ Loading state with skeleton
- ✅ Error state with retry button

### Features Section
- ✅ Section title with gradient accent
- ✅ Decorative divider line
- ✅ Dynamic content loading
- ✅ Professional typography and spacing

### Product Carousel
- ✅ **3 Products**: Point of Sale, Self-service, Kitchen Management
- ✅ **Desktop**: 3 items visible side-by-side
- ✅ **Tablet**: 2 items visible
- ✅ **Mobile**: 1 item full width
- ✅ Navigation arrows with circular loop
- ✅ Smooth 300ms slide transitions
- ✅ Real product images from assets
- ✅ Responsive image sizing

### Advanced Features
- ✅ Simulated API with 1000-1500ms delays
- ✅ Error handling (10% random failure for testing)
- ✅ Retry functionality
- ✅ Skeleton loading states
- ✅ Custom React hooks (useContent, useCarousel)
- ✅ CSS Modules for scoped styling
- ✅ Accessibility (aria-labels, semantic HTML)

---

## 📁 Project Structure

```
graftter/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── Carousel_img_1.JPG    # Point of Sale
│   │   ├── Carousel_img_2.JPG    # Self-service
│   │   └── Carousel_img_3.JPG    # Kitchen Management
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── Carousel.jsx              # Carousel component
│   │       ├── Carousel.module.css       # Carousel styles
│   │       ├── ProductCard.jsx           # Product card component
│   │       ├── ProductCard.module.css    # Product card styles
│   │       ├── GradientText.jsx          # Gradient text component
│   │       ├── GradientText.module.css   # Gradient text styles
│   │       └── Skeleton.jsx              # Loading skeleton
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx       # Hero section
│   │   └── FeaturesSection.jsx   # Features + Carousel
│   │
│   ├── hooks/
│   │   ├── useContent.js         # Data fetching hook
│   │   └── useCarousel.js        # Carousel logic hook
│   │
│   ├── services/
│   │   └── api.js                # Mock API with simulated delays
│   │
│   ├── data/
│   │   └── content.js            # All app content & images
│   │
│   ├── styles/
│   │   ├── global.css            # Global styles
│   │   └── variables.css         # CSS variables
│   │
│   ├── App.jsx                   # Root component
│   └── main.jsx                  # React entry point
│
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                    # This file
```

---

## 🧩 Component Overview

### HeroSection
```jsx
// Renders hero heading, subheadline, and CTA
// Data source: content.hero
// Loading state: Skeleton placeholder
// Error handling: Retry button
```

### FeaturesSection
```jsx
// Renders section title, subtitle, divider, and carousel
// Data source: content.featuresSection
// Manages carousel configuration
// Passes products to Carousel component
```

### Carousel
```jsx
// Displays products in responsive grid
// Handles navigation (arrows)
// Manages slide transitions
// Props: items (products), config (carousel settings)
```

### ProductCard
```jsx
// Displays individual product
// Shows product title and image
// Props: product object with title, image, highlight
```

### Custom Hooks

#### useContent
```javascript
// Manages data fetching, loading, error states
// Returns: { data, loading, error, retry }
// Simulates network delay (1-1.5s)
```

#### useCarousel
```javascript
// Manages carousel state and navigation
// Returns: { index, next, prev, goToSlide }
// Circular navigation (infinite loop)
```

---

## 🔄 Data Flow

```
content.js
    ↓
API Layer (api.js)
    ↓ (1-1.5s simulated delay)
useContent Hook
    ↓
React Component (HeroSection / FeaturesSection)
    ↓
Child Components (Carousel, ProductCard)
    ↓
Display to User
```

### Data Structure
```javascript
{
  hero: { headlinePrefix, headlineGradient, subheadline, cta },
  featuresSection: {
    title, titleAccent, titleSuffix, subtitle,
    carousel: { itemsPerView, showArrows, showDots, transitionDuration },
    products: [{ id, title, image, highlight }]
  }
}
```

---

## 🎠 Carousel Features

### Responsive Layout
| Device | Items | Layout |
|--------|-------|--------|
| Desktop (1200px+) | 3 | Side by side |
| Tablet (768-1024px) | 2 | Two per row |
| Mobile (480-768px) | 1 | Full width |
| Small (<480px) | 1 | Compact |

### Navigation
- ✅ **Arrows**: Circular navigation (infinite loop)
- ✅ **Dots**: Optional, hidden by default
- ✅ **Transition**: Smooth 300ms CSS animation
- ✅ **Keyboard**: Accessible (aria-labels)

### Products Displayed
1. **Point of Sale** - `Carousel_img_1.JPG`
2. **Self-service** - `Carousel_img_2.JPG`
3. **Kitchen Management** - `Carousel_img_3.JPG`

---

## 📱 Responsive Design

### Breakpoints
```css
Desktop:   1200px+
Tablet:    768px - 1024px
Mobile:    480px - 768px
Small:     < 480px
```

### Responsive Features
- ✅ Fluid typography (scales with screen size)
- ✅ Adaptive padding and margins
- ✅ Mobile-optimized navigation
- ✅ Image scaling with aspect ratio preservation
- ✅ Touch-friendly button sizes

---

## 📸 Screenshots

### Hero Section
```
┌─────────────────────────────────┐
│   Looking for a new             │
│   technology provider?          │
│                                 │
│   [Subheadline text...]         │
│                                 │
│   [Learn more button]           │
└─────────────────────────────────┘
```

### Features Section & Carousel
```
┌─────────────────────────────────┐
│   More ways Grafter can help    │
│   you grow your business        │
│                                 │
│   [Divider]                     │
│                                 │
│  [Title]    [Title]    [Title]  │
│  [Image 1]  [Image 2]  [Image 3]│
│                                 │
│      [←]              [→]       │
│                                 │
└─────────────────────────────────┘
```

### Mobile View
```
┌──────────────────┐
│   [Title]        │
│   [Image]        │
│                  │
│    [←]  [→]      │
└──────────────────┘
```

---

## 🎨 Color Palette

```
Primary Blue:    #3b82f6
Orange Accent:   #f97316
Dark Gray:       #1f2937
Light Gray:      #6b7280
Background:      #f9fafb
White:           #ffffff
```

---

## 🔧 Configuration

### Carousel Settings (content.js)
```javascript
carousel: {
  itemsPerView: { mobile: 1, tablet: 2, desktop: 3 },
  showArrows: true,      // Display navigation arrows
  showDots: false,       // Hide navigation dots
  transitionDuration: 300 // Animation speed (ms)
}
```

### API Simulation (api.js)
```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// Network delay: 1000-1500ms
// Error rate: 10% (for testing error states)
```

---

## 🚀 Performance Optimizations

✅ **Code Splitting**: Vite handles automatic chunk splitting
✅ **Image Optimization**: CSS object-fit for responsive images
✅ **CSS Modules**: Only styles used are loaded
✅ **React Optimization**: useCallback for memoization
✅ **Lazy Loading**: Components load on demand

---

## ♿ Accessibility Features

✅ Semantic HTML structure
✅ ARIA labels on buttons
✅ Keyboard navigation support
✅ Color contrast compliance
✅ Responsive touch targets

---

## 📋 Assumptions & Decisions

### Key Assumptions
1. **React Stack**: Chosen over Vanilla JS for component reusability and state management
2. **CSS Modules**: Used for scoped, conflict-free styling
3. **Mock API**: Simulates real API with delays and error handling
4. **Image Format**: JPG used for carousel (easily replaceable)

### Design Decisions
1. **Circular Carousel**: Infinite loop navigation for better UX
2. **Responsive Grid**: Adaptive items count (3/2/1) instead of fixed
3. **CSS Animations**: Pure CSS for better performance
4. **Data-Driven**: All content in separate file for easy updates
5. **Custom Hooks**: Reusable logic without external dependencies

---

## 🐛 Known Limitations & Future Improvements

### Current Limitations
- Mock API doesn't persist data (refresh reloads)
- No pagination for carousel (only 3 products)
- Static content file (would need backend for dynamic updates)

### Potential Enhancements
- Backend API integration
- Database for content management
- User authentication
- Analytics tracking
- SEO optimization
- Dark mode support
- Multi-language support

---

## 📝 License

This project is created for educational purposes as part of a Front-End Technical Assessment.

---

## 👨‍💻 Development Notes

### Common Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Debugging Tips
1. Check React DevTools for component state
2. Use Chrome DevTools for CSS debugging
3. Check Network tab for API delays
4. Review console for any errors

### File Naming Conventions
- Components: PascalCase (`ProductCard.jsx`)
- Hooks: camelCase with `use` prefix (`useCarousel.js`)
- CSS Modules: `.module.css` suffix
- Constants: UPPER_SNAKE_CASE

---

## 📞 Support & Questions

For questions about the implementation, refer to:
- Figma design reference for visual specs
- Component JSDoc comments
- CSS Module variable definitions

---

**Status**: ✅ Production Ready

Built with ❤️ using React 18 + Vite