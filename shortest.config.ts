import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: true,
  baseUrl: process.env.BASE_URL || "https://example.com",
  ai: {
    provider: "anthropic",
    model: "claude-3-5-sonnet-latest",
    apiKey: process.env.ANTHROPIC_API_KEY
  },
  testPattern: "tests/shortest/**/*.test.ts",
} satisfies ShortestConfig;
