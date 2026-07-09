import { createDomshotPlan } from "@usedomshot/cli";

const plan = await createDomshotPlan({
  url: "https://example.com",
  intent: "homepage feature section",
  target: "feature cards",
  count: 4,
  output: "artifacts/domshot/homepage-plan.json",
  style: "auto",
  browser: { mode: "launch", headless: true }
});

console.log({
  path: plan.path,
  shots: plan.shots.map((shot) => ({
    target: shot.target,
    selector: shot.selector,
    suggestedOutput: shot.suggestedOutput,
    suggestedStyle: shot.suggestedStyle,
    decision: shot.decision
  })),
  rejected: plan.rejected.length,
  warnings: plan.warnings
});

