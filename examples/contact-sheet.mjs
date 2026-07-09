import { createDomshotContactSheet } from "@usedomshot/cli";

const sheet = await createDomshotContactSheet({
  url: "https://example.com",
  intent: "homepage feature visuals",
  target: "feature cards",
  limit: 9,
  output: "artifacts/domshot/contact-sheet.png"
});

console.log(JSON.stringify({
  path: sheet.path,
  width: sheet.width,
  height: sheet.height,
  candidates: sheet.candidates.map((candidate) => ({
    selector: candidate.selector,
    kind: candidate.kind,
    confidence: candidate.confidence,
    warnings: candidate.warnings
  })),
  warnings: sheet.warnings
}, null, 2));

