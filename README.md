# Shadcn Storybook - React + Tailwind CSS v4

A modern, data-driven Storybook template built with React 19, Tailwind CSS v4, Vite, and Shadcn UI.

## Features

- **Data-Driven UI**: Components are automatically registered by adding a config file.
- **Nested Routing**: Fast, smooth navigation between components using React Router 7.
- **Interactive Controls**: Modify component props in real-time.
- **Theming**: Integrated Dark/Light mode support.
- **Modern Stack**: Vite, TypeScript (Solution Mode), ESLint 9 (Flat Config).

## Folder Structure

- `src/components/ui`: Core UI components (Shadcn).
- `src/components/storybook`: Layout and Storybook-specific components (Sidebar, TopBar).
- `src/data/components`: Configuration files for each component story.
- `src/pages`: Higher-level page components.
- `src/hooks`: Custom hooks (e.g., `useTheme`).

## How to Add a New Component

Follow these simple steps to add a new component to your Storybook:

1. **Install/Create the UI Component**:
   - Add your component to `src/components/ui/`.
   - Example: `npx shadcn@latest add accordion`.

2. **Create the Story Configuration**:
   - Create a new file in `src/data/components/` named `[component-name].tsx`.
   - Define the component's metadata: `id`, `name`, `description`, `props`, and `examples`.
   - _Tip: You can use `.tsx` to define small wrapper components for complex examples._

3. **Register the Component**:
   - Open `src/data/components/index.ts`.
   - Import your new config and add it to the `componentConfigs` array.

```typescript
// Example: Registering Accordion
import { accordionConfig } from "./accordion";

export const componentConfigs = [
  buttonConfig,
  accordionConfig, // Add here
];
```

## Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (error-free validation)
npm run build
```

## TSConfig Explanation

- **tsconfig.json**: The workspace root config (Solution mode).
- **tsconfig.app.json**: Config for the React application (Browser).
- **tsconfig.node.json**: Config for build tools (Vite/Node).

_All three are required for proper environment isolation and IDE support._
