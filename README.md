# Rishabh Jain - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite, showcasing technical skills, projects, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: React 18 with TypeScript for type-safe development
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Interactive UI**: Smooth animations and transitions
- **Component Architecture**: Reusable, maintainable React components
- **Professional Styling**: Clean, modern design with CSS variables
- **Performance Optimized**: Fast loading with Vite build system
- **Accessibility**: Semantic HTML and ARIA compliance

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast development server and build tool
- **CSS3** - Custom CSS with CSS variables and modern features
- **Lucide React** - Professional icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **React Compiler** - Optimized React performance
- **Git** - Version control
- **npm** - Package management

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ContactForm.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── SectionHeader.tsx
│   └── SkillCard.tsx
├── pages/              # Page components
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── summary.tsx
│   └── contact.tsx
├── styles/             # CSS stylesheets
│   ├── Skills.css
│   ├── Projects.css
│   ├── Summary.css
│   └── SkillCard.css
├── types/              # TypeScript type definitions
│   └── index.ts
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.ts
└── design/             # Global styles and variables
    └── style.css
```

## 🎯 Key Sections

### **Summary**
- Professional hero section with call-to-action
- Featured skills showcase
- Download resume functionality

### **Skills**
- Comprehensive technical skills display (40+ skills)
- Categorized by domain: Frontend, Backend, Databases, Automation & Low-Code, Machine Learning, NLP, Cloud, DevOps, and Core CS
- Interactive skill cards with project usage examples
- Professional icon representations using Lucide React
- **Latest additions**: Golang, REST APIs, Webflow, Compiler Design

### **Experience**
- Professional work history and role details
- Current position: MERN Stack Developer at iGeekTech (Sept 2025 – Present)
- Project highlights and key contributions
- Technology stack showcase
- Responsive timeline layout

### **Projects**
- Featured project showcases
- Project cards with tech stack details
- GitHub and live demo links
- AI/ML project highlights

### **Publications**
- Peer-reviewed research and publications
- LIPNET: Deep Learning for Visual Speech Recognition
- Links to publication and source code
- Technology stack details

### **Contact**
- Professional contact form
- Form validation and submission handling
- Success/error feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishi14052003/RISHABH-JAIN-PERSONAL-PORTFOLIO.git
   cd RISHABH-JAIN-PERSONAL-PORTFOLIO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🎨 Design System

### Color Scheme
- **Light Mode**: Clean whites and grays with vibrant primary colors
- **Dark Mode**: Dark theme with excellent contrast
- **Primary**: Modern blue gradient
- **Accent**: Professional highlights and call-to-action
- **Fully Responsive**: Automatic theme switching based on system preferences

### Typography
- Clean, readable font stack
- Responsive scaling
- Professional hierarchy

### Components
- **SkillCard**: Displays individual skills with icons and projects
- **ProjectCard**: Showcases project details and links
- **PublicationCard**: Professional publication display with links
- **SectionHeader**: Consistent section headings
- **ContactForm**: Professional contact interface
- **TimelineItem**: Experience and timeline visualization (with light/dark mode support)

### Theme Support
- ✅ **Light Mode** - All icons, text, and borders clearly visible
- ✅ **Dark Mode** - Original dark theme fully supported
- ✅ **Automatic Theme Detection** - System preference detection
- ✅ **CSS Variables** - Dynamic color theming with proper fallbacks
- ✅ **Lucide React Icons** - Adaptive icon coloring for both themes

## 🔧 Configuration

### Recent Updates (March 2026)

#### Experience Page
- ✨ Added professional work history section
- 🎯 MERN Stack Developer role at iGeekTech with full project details
- 📝 Detailed descriptions with key highlights and tech stack
- 🎨 Professional timeline layout with icons and hover effects

#### Skills Enhancement
- 📚 Expanded skill categories to 8 major domains
- 🆕 Added: Golang, REST APIs, Webflow, Compiler Design
- 🎯 Total skills: 40+ with project usage examples
- 🔗 Fixed lucide-react icon imports (Cpu → Golang, ArrowRightLeft → REST APIs, Settings → Compiler Design)

#### Publications Page
- 📰 Created dedicated publications section
- 🔬 Added LIPNET: Deep Learning for Visual Speech Recognition
- 🔗 Links to publication and GitHub repository
- 📊 Professional presentation with tech stack showcase

#### Light Mode Support
- 🌞 Full light mode compatibility across all pages
- ✅ Fixed CSS variables for proper theme switching
- 📱 All icons, text, and borders visible in both modes
- 🎨 Updated Experience and Publications pages with theme-aware colors
- 🔧 Fixed SkillCard icon colors to work with both themes

#### Bug Fixes
- 🐛 Fixed invalid lucide-react icon names (Gopher, GitNetwork)
- 🧹 Removed unused imports (TimelineItem, currentHash)
- ✅ Replaced undefined CSS variables with standard theme colors
- 🔨 Build successful with no TypeScript or ESLint errors

### ESLint Configuration
The project uses ESLint with TypeScript support and React-specific rules:

```javascript
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### TypeScript Configuration
- Strict type checking enabled
- Path aliases for clean imports
- React JSX support

## 🌐 Deployment

### Production Build
```bash
npm run build
```

The build artifacts are stored in the `dist/` directory and are ready for deployment to any static hosting service.

### Recommended Hosting
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment
- **GitHub Pages** - Free static hosting
- **AWS S3** - Scalable cloud hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project. While contributions are appreciated, please note:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with a clear description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rishabh Jain**
- Full Stack Developer
- Machine Learning Enthusiast
- Automation Specialist

### Connect with Me
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **GitHub**: [@rishi14052003](https://github.com/rishi14052003)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **Email**: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing fast build tool
- Lucide for the beautiful icon library
- The open-source community for inspiration and tools

---

**Built with ❤️ using React, TypeScript, and Vite**
  