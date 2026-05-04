import { test } from "shortest";

test("basic site check", async ({ ai }) => {
  await ai("Go to https://example.com");
  await ai("Verify the page contains Example Domain");
});
