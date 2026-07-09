# DOMShot For Agents

DOMShot helps people and AI agents capture selected page elements as clean or styled PNG screenshots.

## Public URLs

- Home: https://domshot.app/
- Docs: https://domshot.app/docs/
- Chrome extension docs: https://domshot.app/docs/extension/
- Agent docs: https://domshot.app/docs/agent/
- Agent CLI docs: https://domshot.app/docs/agent/cli/
- Agent MCP docs: https://domshot.app/docs/agent/mcp/
- Agent troubleshooting: https://domshot.app/docs/agent/troubleshooting/
- Privacy policy: https://domshot.app/privacy

## Product Summary

DOMShot has two product surfaces:

- Chrome extension: lets a user select a visible DOM element, preview the capture locally, adjust output styling, and download a PNG.
- Agent package: npm, CLI, and MCP tooling for AI agents and automation workflows to inspect pages, find useful UI candidates, and capture polished PNGs.

The npm package is `@usedomshot/cli` and exposes the `domshot` terminal command.

## Agent Boundary

DOMShot is the eyes and camera. It can inspect a page, find likely UI candidates, capture polished PNGs, create contact sheets, and explain confidence. The calling agent is the brain: decide the story, decide which screenshots are useful, place them in final content, and retry when evidence is weak.

