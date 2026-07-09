import { inspectDomshotPage } from "@usedomshot/cli";

const result = await inspectDomshotPage({
  url: "https://example.com",
  intent: "homepage feature visuals",
  limit: 6
});

console.log(JSON.stringify(result, null, 2));

