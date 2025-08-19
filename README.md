# Frontend Boilerplate

A modern React + TypeScript frontend boilerplate for rapid project development.

## Features

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Custom UI Components** (lightweight, no external UI library)
- **Authentication** with Zustand state management
- **Protected Routes** 
- **Clean Architecture** with pages, components, stores
- **TypeScript Error Checking** with multiple tsconfig presets
- **Responsive Design** with modern CSS

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── stores/        # Zustand state management
├── hooks/         # Custom React hooks
├── lib/           # Utilities
├── App.tsx        # Main app component
└── main.tsx       # App entry point
```

## Environment Setup

Copy `.env.example` to `.env` and configure your environment variables.

## Features Included

- Authentication pages (Login/Signup)
- Protected route wrapper
- Responsive navigation
- Modern CSS styling
- TypeScript configuration presets
- Error checking and validation

---

This boilerplate is designed to be cloned and customized for new projects. It provides a solid foundation with modern tooling and best practices.

## Advanced Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
