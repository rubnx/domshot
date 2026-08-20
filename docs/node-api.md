# Node API

Install:

```bash
npm install @usedomshot/cli
npx playwright install chromium
```

## Capture One Target

```js
import { captureDomshot } from "@usedomshot/cli";

const result = await captureDomshot({
  url: "https://example.com",
  target: "pricing card",
  output: "artifacts/domshot/pricing-card.png",
  style: "auto"
});

console.log(result.path, result.selector, result.width, result.height);
```

## Inspect A Page

```js
import { inspectDomshotPage } from "@usedomshot/cli";

const result = await inspectDomshotPage({
  url: "https://example.com",
  intent: "homepage feature visuals",
  limit: 6
});

console.log(result.candidates);
```

## Create A Shot Pack

```js
import { createDomshotShotPack } from "@usedomshot/cli";

const pack = await createDomshotShotPack({
  url: "https://example.com",
  intent: "homepage feature section",
  target: "feature cards",
  count: 4,
  outputDir: "artifacts/domshot/homepage-shot-pack",
  style: "auto"
});

console.log(pack.contactSheet, pack.report);
```

Use selector mode when exactness matters. Use target mode when the agent can describe the element in plain language.

## Cancel Long-Running Work

Pass an `AbortSignal` as the second argument to cancel a browser job or enforce a deadline:

```js
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 30_000);

try {
  await captureDomshot({ url: "https://example.com", selector: "h1" }, {
    signal: controller.signal
  });
} finally {
  clearTimeout(timer);
}
```
