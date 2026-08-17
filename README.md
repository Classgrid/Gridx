<div align="center">
  <h1>✨ GridX UI</h1>
  <p><strong>A Premium React Component Library built for Modern Web Applications.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@classgrid/gridx"><img src="https://img.shields.io/npm/v/@classgrid/gridx?color=blue&style=for-the-badge" alt="NPM Version" /></a>
    <a href="https://github.com/Classgrid/Gridx/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@classgrid/gridx?color=green&style=for-the-badge" alt="License" /></a>
    <a href="https://www.npmjs.com/package/@classgrid/gridx"><img src="https://img.shields.io/npm/dt/@classgrid/gridx?color=purple&style=for-the-badge" alt="Downloads" /></a>
  </p>
</div>

<br />

GridX is a meticulously crafted collection of over 100+ React UI components. Built on top of Radix Primitives and styled with Tailwind CSS, GridX provides beautifully designed, accessible, and customizable components out of the box—ranging from core inputs to advanced 3D visualizers.

---

## 🚀 Getting Started

### Installation

Install GridX and its peer dependencies via your favorite package manager:

```bash
npm install @classgrid/gridx react-fast-marquee @react-three/fiber three framer-motion lucide-react
```

### Setup Tailwind

Because GridX is powered by Tailwind CSS, you need to tell your Tailwind configuration to scan the GridX package for utility classes.

Add the GridX preset and path to your `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config = {
  presets: [require("@classgrid/gridx/tailwind.preset.js")],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@classgrid/gridx/dist/**/*.js" // <--- Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
```

---

## 🎨 Usage

Import components directly from the package and use them in your React application:

```tsx
import { Button, BentoGrid, Globe3D } from "@classgrid/gridx";

export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-8">
      <Button variant="default">Click Me!</Button>
      
      <div className="h-[400px]">
        <Globe3D />
      </div>
    </main>
  );
}
```

---

## 💎 Features

- **100+ Components:** Everything from basic Buttons and Inputs to complex Rich Text Editors, 3D Globes, and Animated Marquees.
- **Fully Accessible:** Built on top of Radix UI to ensure full WAI-ARIA compliance, keyboard navigation, and screen reader support.
- **Dark Mode Ready:** First-class support for light and dark themes using CSS variables.
- **Beautiful by Default:** Painstakingly designed micro-interactions, smooth animations, and modern aesthetics.
- **Type-Safe:** Written entirely in TypeScript with comprehensive type definitions.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <br/>
  <i>Built with ❤️ by the Classgrid Team</i>
</div>
