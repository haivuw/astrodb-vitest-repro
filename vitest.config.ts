/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

// https://docs.astro.build/en/guides/testing/#vitest
// https://vitest.dev/config/
export default getViteConfig({
  test: {
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      include: ["**/*.ts"],
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
});
