# CLI

Install the package:

```bash
npm install @usedomshot/cli
npx playwright install chromium
```

Or install globally:

```bash
npm install -g @usedomshot/cli@latest
```

## Capture

```bash
domshot capture https://example.com "h1" --out artifacts/domshot/heading.png
```

```bash
domshot capture https://example.com \
  --target "pricing card" \
  --out artifacts/domshot/pricing-card.png \
  --style auto
```

## Inspect

```bash
domshot inspect https://example.com \
  --intent "homepage feature visuals" \
  --limit 6
```

## Plan

```bash
domshot plan https://example.com \
  --intent "homepage feature section" \
  --target "feature cards" \
  --count 4 \
  --out artifacts/domshot/homepage-plan.json \
  --style auto
```

## Capture Set

```bash
domshot capture-set https://example.com \
  --target "feature cards" \
  --count 4 \
  --out-dir artifacts/domshot/feature-cards \
  --style auto
```

## Shot Pack

```bash
domshot shot-pack https://example.com \
  --intent "homepage feature section" \
  --target "feature cards" \
  --count 4 \
  --out-dir artifacts/domshot/homepage-shot-pack \
  --style auto
```

The CLI writes JSON metadata to stdout and writes PNG/JSON artifacts to the paths you request.

