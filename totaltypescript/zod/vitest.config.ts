import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./src/**/*.{js,ts}'],
    exclude: ['./coverage'],
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text', 'html', 'json'],
      thresholds: {
        100: true,
      },
    },
  },
});
