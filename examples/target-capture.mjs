import { captureDomshot } from "@usedomshot/cli";

const result = await captureDomshot({
  url: "https://example.com",
  target: "pricing card",
  output: "artifacts/pricing-card.png",
  style: "auto"
});

console.log(JSON.stringify({
  path: result.path,
  width: result.width,
  height: result.height,
  selector: result.selector,
  target: result.target,
  fallback: result.fallback,
  warning: result.warning
}, null, 2));

