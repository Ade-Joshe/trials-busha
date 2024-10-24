import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import compression from 'vite-plugin-compression';

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [svgr(), dts(), react(), compression({ algorithm: 'gzip' })
  ],
});