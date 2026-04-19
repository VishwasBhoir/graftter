# 🍔 Grafterr Landing Page

A modern, fully responsive landing page for Grafterr (restaurant technology platform) built with React and Vite. Features a dynamic hero section and an interactive product carousel showcasing restaurant management solutions.

---

## 📋 Table of Contents

- [Stack & Technologies](#-stack--technologies)
- [Setup Instructions](#-setup-instructions)
- [Project Approach](#-project-approach)
- [Features Implemented](#-features-implemented)
- [Project Structure](#-project-structure)
- [Component Architecture](#-component-architecture)
- [Screenshots](#-screenshots)
- [API & Data Flow](#-api--data-flow)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)

---

## 🛠️ Stack & Technologies

### Chosen Stack: **React 19 + Vite**

**Why React?**
- Component-based architecture for reusability
- Efficient state management with hooks
- Rich ecosystem and community support
- Excellent developer experience

**Dependencies:**
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

**Dev Stack:**
- **Vite**: Lightning-fast build tool and dev server
- **ESLint**: Code quality and consistency
- **CSS Modules**: Scoped styling without conflicts

**Version Information:**
- Node.js: 18+ recommended
- npm: 9+
- React: 19.2.4
- Vite: 8.0.4

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/VishwasBhoir/graftter.git
cd graftter

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173 (or the URL shown in terminal)
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run linter to check code quality
npm run lint
```

---

## 📐 Project Approach

### Design Strategy

1. **Mobile-First Design**
   - Started with mobile layout (1 carousel item)
   - Progressively enhanced for tablet (2 items)
   - Full desktop experience (3 items)

2. **Component-Based Architecture**
   - Small, focused, reusable components
   - Separation of concerns (logic, styling, data)
   - Easy to maintain and extend

3. **Dynamic Data Loading**
   - All content loaded from JavaScript module (`content.js`)
   - Simulated API delays (1000-1500ms) for realistic UX
   - Error handling with retry mechanism
   - No hardcoded content in JSX

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **React Hooks** | Modern, functional approach; easier state management |
| **CSS Modules** | Avoid CSS conflicts; scoped styling per component |
| **Custom Hooks** | `useContent` for reusable data fetching logic |
| **Image Imports** | Webpack/Vite handles image optimization automatically |
| **CSS Transforms** | GPU-accelerated animations for 60fps performance |

### Development Approach

```
1. Analysis Phase
   └─ Review Figma design
   └─ Identify components
   └─ Plan data structure

2. Component Development
   └─ Build reusable UI components
   └─ Style with CSS Modules
   └─ Add interactivity with hooks

3. Integration Phase
   └─ Connect to data source
   └─ Add loading/error states
   └─ Implement carousel logic

4. Polish Phase
   └─ Responsive testing
   └─ Performance optimization
   └─ Accessibility improvements
```

---

## ✨ Features Implemented

### Hero Section
- ✅ Large headline with gradient text effect
- ✅ Gradient button (blue to orange)
- ✅ Responsive typography
- ✅ Loading state handling
- ✅ Error state with retry button

### Features Section with Carousel
- ✅ Section title with accent text
- ✅ Descriptive subtitle
- ✅ Decorative divider line
- ✅ **3-Product Carousel** with:
  - Full-size product images
  - Navigation arrows (← →)
  - Circular infinite navigation
  - Smooth 300ms transitions
  - Responsive: 3/2/1 items based on screen size

### Product Cards
- ✅ Title boxes above images
- ✅ Full-height product images
- ✅ Clean, minimal design
- ✅ Hover effects
- ✅ Proper aspect ratio handling

### Responsive Design
- ✅ Mobile (375px - 480px)
- ✅ Tablet (481px - 1024px)
- ✅ Desktop (1025px+)
- ✅ Touch-friendly targets
- ✅ Optimized layouts per device

### User Experience
- ✅ Loading skeleton states
- ✅ Error handling with retry
- ✅ Smooth animations
- ✅ Accessible buttons and navigation
- ✅ Fast page load times

---

## 📁 Project Structure

```
grafterr/
├── public/                          # Static assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/                      # Image files
│   │   ├── Carousel_img_1.JPG       # Point of Sale
│   │   ├── Carousel_img_2.JPG       # Self-service
│   │   └── Carousel_img_3.JPG       # Kitchen management
│   │
│   ├── components/                  # Reusable React components
│   │   └── ui/
│   │       ├── Carousel.jsx         # Main carousel logic
│   │       ├── Carousel.module.css  # Carousel styles
│   │       ├── ProductCard.jsx      # Product display
│   │       ├── ProductCard.module.css
│   │       ├── GradientText.jsx     # Gradient text effect
│   │       ├── GradientText.module.css
│   │       ├── FloatingShape.jsx    # Decorative shapes
│   │       ├── FloatingShape.module.css
│   │       └── Skeleton.jsx         # Loading state
│   │
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.jsx          # Hero with headline & CTA
│   │   └── FeaturesSection.jsx      # Features & carousel
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useContent.js            # Data fetching hook
│   │   └── useCarousel.js           # Carousel state management
│   │
│   ├── services/                    # API & external services
│   │   └── api.js                   # Mock API with delays
│   │
│   ├── data/                        # Data files
│   │   └── content.js               # All page content
│   │
│   ├── styles/                      # Global styles
│   │   ├── global.css               # Global & section styles
│   │   └── variables.css            # CSS variables (reserved)
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

---

## 🏗️ Component Architecture

### Data Flow Diagram

```
content.js (Data Source with Image Imports)
    ↓
api.js (Mock API with 1000-1500ms delays)
    ↓
useContent Hook (Data fetching + state management)
    ↓
Section Components (HeroSection, FeaturesSection)
    ↓
UI Components (Carousel, ProductCard, etc.)
    ↓
Display to User (Fully Responsive)
```

### Component Tree

```
App
├── HeroSection
│   └── GradientText (gradient effect on "technology provider?")
│
└── FeaturesSection
    ├── Title with GradientText ("Grafter")
    ├── Subtitle
    └── Carousel
        ├── ProductCard (×3)
        │   ├── Title Box
        │   └── Image (Carousel_img_1.JPG, etc.)
        └── Navigation Controls
            ├── Left Arrow Button (←)
            └── Right Arrow Button (→)
```

### Key Hooks Usage

| Hook | Purpose | Location |
|------|---------|----------|
| `useContent` | Fetch & manage data, handle errors, retry | HeroSection, FeaturesSection |
| `useCarousel` | Manage carousel state & circular navigation | Carousel component |
| `useState` | Local component state | Multiple components |
| `useEffect` | Side effects (data fetching) | useContent hook |
| `useCallback` | Memoize functions | useContent, useCarousel |

---

## 📸 Screenshots

### Desktop View (1440px) - 3 Items Visible
```
┌────────────────────────────────────────────────────────┐
│                   HERO SECTION                          │
│                                                         │
│          Looking for a new                              │
│          technology provider?                           │
│                                                         │
│    Explore our success stories to see how              │
│    businesses like yours have transformed...            │
│                                                         │
│              [Learn more] (Gradient Button)             │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│              FEATURES SECTION                           │
│                                                         │
│     More ways Grafter can help you                      │
│     grow your business                                  │
│                                                         │
│   An award-winning, end-to-end restaurant...            │
│                                                         │
│   ┌─────────────────────────────────────────┐          │
│   │  Point of sale │ Self-service │ Kitchen │          │
│   │  ────────────────────────────────────────│          │
│   │   [Image 1]   │  [Image 2]   │ [Image 3]│          │
│   │   (JPG)       │   (JPG)      │  (JPG)  │          │
│   │               │              │         │          │
│   │               │              │         │          │
│   └─────────────────────────────────────────┘          │
│                                                         │
│               [←] Navigation [→]                        │
└────────────────────────────────────────────────────────┘
```

### Tablet View (1024px) - 2 Items Visible
```
┌──────────────────────────────────┐
│      FEATURES SECTION            │
│                                  │
│   More ways Grafter can help     │
│   grow your business             │
│                                  │
│  ┌────────────────────────────┐ │
│  │  Point of sale │ Self-svc  │ │
│  │  ────────────────────────  │ │
│  │   [Image 1]   │ [Image 2] │ │
│  └────────────────────────────┘ │
│                                  │
│        [←]       [→]             │
└──────────────────────────────────┘
```

### Mobile View (480px) - 1 Item Visible
```
┌──────────────────┐
│  FEATURES        │
│  SECTION         │
│                  │
│  More ways       │
│  Grafter can     │
│  help you grow   │
│                  │
│  ┌────────────┐  │
│  │ Point of   │  │
│  │ sale       │  │
│  │ ────────── │  │
│  │            │  │
│  │ [Image 1]  │  │
│  │            │  │
│  │            │  │
│  └────────────┘  │
│                  │
│   [←]   [→]      │
└──────────────────┘
```

### Responsive Carousel Specifications

| Aspect | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| **Items Shown** | 3 | 2 | 1 |
| **Gap Between** | 40px | 30px | 20px |
| **Image Height** | 300px+ | 250px+ | 180px+ |
| **Arrow Size** | 44px | 40px | 32px |
| **Layout** | Side-by-side | Grid | Full-width |

---

## 🔄 API & Data Flow

### Data Structure (content.js)

```javascript
{
  "navigation": {
    "logo": { "src": "/assets/logo.svg", "alt": "Grafter" },
    "links": ["Products", "Solutions"],
    "cta": "Get Started"
  },
  
  "hero": {
    "headlinePrefix": "Looking for a new",
    "headlineGradient": "technology provider?",
    "subheadline": "Explore our success stories...",
    "cta": "Learn more"
  },
  
  "featuresSection": {
    "title": "More ways",
    "titleAccent": "Grafter",
    "titleSuffix": "can help you grow your business",
    "subtitle": "An award-winning, end-to-end...",
    "carousel": {
      "itemsPerView": { 
        "mobile": 1, 
        "tablet": 2, 
        "desktop": 3 
      },
      "showArrows": true,
      "showDots": false,
      "transitionDuration": 300
    },
    "products": [
      {
        "id": 1,
        "title": "Point of sale",
        "image": pos,                    // Imported image
        "highlight": false               // No border
      },
      // ... more products
    ]
  }
}
```

### API Simulation (api.js)

The `api.js` file simulates real API calls with these features:

```javascript
// Simulated Network Delay: 1000-1500ms random
await delay(Math.random() * 500 + 1000);

// Random Error Simulation: 10% chance of failure
const shouldFail = () => Math.random() < 0.1;

// Returns properly structured data
// Includes retry mechanism via useContent hook
```

### Loading States

| State | Display |
|-------|---------|
| **Loading** | Skeleton placeholder (CSS-based) |
| **Success** | Full content rendered with images |
| **Error** | Error message + Retry button |

---

## 📱 Responsive Design

### Mobile-First Approach

Started with mobile layout first, then enhanced:

```css
/* Base: Mobile (375px+) */
.carouselSlide {
  flex: 0 0 100%;                /* 1 item full width */
  min-height: 180px;
  padding: 0 15px;
}

/* Enhanced: Tablet (768px+) */
@media (min-width: 768px) {
  .carouselSlide {
    flex: 0 0 calc(100% / 2);    /* 2 items */
    min-height: 250px;
    padding: 0 20px;
  }
}

/* Enhanced: Desktop (1200px+) */
@media (min-width: 1200px) {
  .carouselSlide {
    flex: 0 0 calc(100% / 3);    /* 3 items */
    min-height: 300px;
    padding: 0 30px;
  }
}
```

### Carousel Responsiveness

**Desktop (1200px+):**
- 3 items per row with proper spacing
- 40px gap between items
- Full-size images (300px min-height)
- Large navigation arrows (44px diameter)
- Optimal for large screens

**Tablet (768-1199px):**
- 2 items per row
- 30px gap between items
- Medium images (250px min-height)
- Medium arrows (40px diameter)
- Fits iPad and similar devices

**Mobile (481-767px):**
- 1 item full width
- 20px gap/padding
- Smaller images (180px min-height)
- Compact arrows (36px diameter)
- Touch-friendly targets

**Small Mobile (≤480px):**
- 1 item full width
- Minimal padding
- Very small images (150px min-height)
- Tiny arrows (32px diameter)
- Optimized for thumb navigation

---

## 🚀 Deployment

### Build Process

```bash
# Create optimized production bundle
npm run build

# Output: dist/ folder with all files
```

### Deployment Platforms

**Recommended Options:**

1. **Vercel** (Recommended for Vite)
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Add base URL to vite.config.js
   - Push to gh-pages branch

### Environment Configuration

No environment variables required. All data is static.

### Performance Optimizations

- ✅ Vite's code splitting (each component is separate chunk)
- ✅ CSS Modules scoping (no unused CSS)
- ✅ Image optimization (JPG compression)
- ✅ Lazy loading ready
- ✅ CSS transforms for 60fps animations (GPU-accelerated)
- ✅ Minimal dependencies (only React)

---

## 🎯 Key Technical Highlights

### Custom Hooks

**useContent Hook** - Data fetching abstraction
```javascript
const { data, loading, error, retry } = useContent(fetchHeroContent);
// Handles: loading state, errors, retry logic, data management
```

**useCarousel Hook** - Carousel state management
```javascript
const { index, next, prev, goToSlide } = useCarousel(items.length);
// Handles: current slide, navigation, circular looping
```

### CSS Modules Strategy

- Scoped styling prevents naming conflicts
- Each component gets isolated CSS
- Easy to maintain and refactor
- No global CSS pollution

### Image Import Strategy

```javascript
import pos from '../assets/Carousel_img_1.JPG';
import selfService from '../assets/Carousel_img_2.JPG';
import kitchen from '../assets/Carousel_img_3.JPG';

// Vite handles:
// - Image optimization
// - Hash-based caching
// - Tree-shaking unused images
```

---

## 📝 Notes & Assumptions

### Assumptions Made
1. Images provided in `src/assets/` folder (already present)
2. Vite as the build tool (pre-configured)
3. Modern browser support (ES6+ syntax)
4. No external CSS frameworks (pure CSS Modules)
5. Mock API sufficient for demo purposes

### Design Decisions
1. **Removed border on first card**: Clean, minimal look
2. **No navigation dots**: Cleaner UI, arrows sufficient
3. **Circular navigation**: Better UX, infinite scrolling feel
4. **CSS-only animations**: Better performance than JavaScript
5. **Image imports**: Better bundler optimization

### Future Enhancements (Ideas)
- Real API integration with authentication
- Add analytics and tracking
- More sections (testimonials, pricing, CTA)
- Dark mode support
- Internationalization (i18n)
- PWA features
- Advanced carousel features (autoplay, swipe)

---

## 🤝 Support & Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Use custom port
npm run dev -- --port 3000
```

**Images Not Loading**
- Check `src/assets/` folder for images
- Verify file names match content.js
- Clear browser cache and rebuild

**Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

---

## 📄 Project Metadata

**Technology Stack:**
- React 19.2.4
- Vite 8.0.4
- CSS Modules
- ES6+ JavaScript

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Status:** ✅ Production Ready
**Last Updated:** April 19, 2026
**Version:** 1.0.0

---

**Created for:** Grafterr Landing Page Assessment
**Repository:** https://github.com/VishwasBhoir/graftter
