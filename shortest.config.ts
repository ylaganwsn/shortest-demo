import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: true,
  baseUrl: process.env.BASE_URL || "https://example.com",
  ai: {
    provider: "anthropic",
    model: "anthropic.claude-3-5-sonnet-20241022-v2:0",
    apiKey: process.env.ANTHROPIC_API_KEY
  },
  testPattern: "tests/shortest/**/*.test.ts",
} satisfies ShortestConfig;
