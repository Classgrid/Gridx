import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "next", "next/image", "next/link", "next/navigation", "cobe", "@base-ui/react"],
  banner: {
    js: "'use client';",
  },
});
