// @ts-check
import { defineConfig } from "astro/config";

// Static-first. Domain is bracketed until Phase 2 / O001 resolves (D012).
// Replace site when the real URL is chosen; do not ship brackets.
export default defineConfig({
  site: "https://example.com",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
});
