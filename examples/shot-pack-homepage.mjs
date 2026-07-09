import { createDomshotShotPack } from "@usedomshot/cli";

const pack = await createDomshotShotPack({
  url: "https://example.com",
  intent: "homepage feature section",
  target: "feature cards",
  count: 4,
  outputDir: "artifacts/domshot/homepage-shot-pack",
  style: "auto"
});

console.log(JSON.stringify({
  outputDir: pack.outputDir,
  contactSheet: pack.contactSheet,
  report: pack.report,
  items: pack.items.map((item) => ({
    path: item.path,
    use: item.use,
    selector: item.selector,
    confidence: item.confidence,
    selectedReason: item.selectedReason,
    styleReason: item.styleReason
  })),
  rejectedCandidates: pack.rejectedCandidates.map((item) => ({
    selector: item.candidate.selector,
    reasons: item.reasons
  })),
  warnings: pack.warnings
}, null, 2));

