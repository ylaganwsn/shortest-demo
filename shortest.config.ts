import { defineConfig } from '@antiwork/shortest';

export default defineConfig({
  // The 'ai' block is required to tell the tool which model to use
  ai: {
    provider: 'openai',
    model: 'gpt-4o', 
  },
  // The 'baseUrl' is required so the AI knows where to start its journey
  baseUrl: process.env.BASE_URL || 'https://example.com',
  // Since 'testDir' was unrecognized, shortest likely uses 
  // a default pattern (like *.test.ts). We'll leave it out for now.
});
