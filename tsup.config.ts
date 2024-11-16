import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Adjust the entry point as needed
  format: ["esm", "cjs"], // Output formats
  clean: true, // Clean the output directory before building
  dts: true, // Generate TypeScript declaration files
  minify: true, // Minify the output
  sourcemap: true, // Generate source maps
});
