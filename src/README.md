# Solinex Website - Source Code Organization

## 📁 Project Structure

```
src/
├── components/           # React components organized by purpose
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, AboutUs, Projects, etc.)
│   ├── ui/              # UI components (LanguageSwitcher, etc.)
│   ├── common/          # Reusable components (SectionHeader, Card, etc.)
│   ├── data/            # Data constants and configurations
│   └── index.js         # Barrel exports for clean imports
├── contexts/            # React contexts (LanguageContext)
├── hooks/               # Custom React hooks
├── assets/              # Static assets (images, icons)
├── constants/           # Application constants
├── utils/               # Utility functions
├── translations/        # Internationalization files
└── styles/              # CSS and styling files
```

## 🧩 Component Categories

### Layout Components (`/layout`)
- **Navbar**: Navigation bar with mobile menu
- **Footer**: Footer with company info and links

### Section Components (`/sections`)
- **Hero**: Landing section with call-to-action
- **AboutUs**: Company information and values
- **Projects**: Portfolio showcase with slider
- **Solutions**: Service offerings
- **TechStack**: Technology stack display
- **ContactForm**: Contact form with validation
- **Showcase**: Project showcase carousel

### UI Components (`/ui`)
- **LanguageSwitcher**: Language toggle component

### Common Components (`/common`)
- **SectionHeader**: Standardized section headers
- **ScrollAnimatedSection**: Wrapper for scroll animations
- **Card**: Reusable card component
- **TechBadge**: Technology tags
- **GradientButton**: Styled buttons

### Data (`/data`)
- **techStackData**: Technology stack information
- **projectsData**: Project portfolio data
- **solutionsData**: Service solutions data
- **showcaseData**: Showcase project data

## 🎯 Benefits of This Organization

1. **Clear Separation of Concerns**: Components are grouped by their purpose
2. **Easy Navigation**: Developers can quickly find what they need
3. **Scalability**: Easy to add new components in the right category
4. **Reusability**: Common components are centralized
5. **Maintainability**: Data is separated from presentation logic
6. **Clean Imports**: Barrel exports provide clean import statements

## 📦 Import Examples

```javascript
// Import specific components
import { Navbar, Footer } from './components/layout'
import { Hero, AboutUs } from './components/sections'
import { SectionHeader, Card } from './components/common'

// Import everything from a category
import * as Layout from './components/layout'

// Import data
import { techItems, createProjectsData } from './components/data'
```

## 🔧 Development Guidelines

1. **New Components**: Place in appropriate category folder
2. **Data Constants**: Extract to `/data` folder when used in multiple places
3. **Utility Functions**: Add to `/utils` for reusable logic
4. **Styling**: Use Tailwind CSS classes consistently
5. **Exports**: Always export from category index files
6. **Imports**: Use barrel exports for cleaner code

## 🚀 Adding New Features

1. Create component in appropriate folder
2. Add to category's index.js file
3. Update main components/index.js if needed
4. Extract data constants if applicable
5. Update documentation
