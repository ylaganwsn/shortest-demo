import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: true,
  baseUrl: process.env.BASE_URL || "https://example.com",
  ai: {
    provider: "openai", // or "anthropic"
    model: "gpt-4o",
    apiKey: process.env.OPENAI_API_KEY
  },
  testPattern: "**/*.test.ts",
} satisfies ShortestConfig;
