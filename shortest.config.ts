import { defineConfig } from '@antiwork/shortest';

export default defineConfig({
  testDir: './tests/shortest',
  headless: true,
  // Shortest defaults to GPT-4o, ensure your API key has access
});
