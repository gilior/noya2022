import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: path.join(__dirname, "./audioPlayer-dir"),
    lib: {
      name: "audioPlayer",
      entry: "./src/audioPlayer-bundle.js",
      formats: ["umd"],
      fileName: () => "audioPlayer-bundle.js",
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name]-[hash].js`,
      },
    },
  },
});