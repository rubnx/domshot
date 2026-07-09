import { captureDomshot } from "@usedomshot/cli";

const result = await captureDomshot({
  url: "https://example.com",
  selector: "h1",
  output: "artifacts/example-heading.png",
  preset: "floating"
});

console.log({
  path: result.path,
  width: result.width,
  height: result.height,
  fallback: result.fallback
});

