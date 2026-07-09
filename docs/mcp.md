# MCP

DOMShot can run as a local stdio MCP server:

```bash
domshot mcp
```

Install globally when the MCP host expects commands on your `PATH`:

```bash
npm install -g @usedomshot/cli@latest
```

## Host Config

```json
{
  "mcpServers": {
    "domshot": {
      "command": "domshot",
      "args": ["mcp"]
    }
  }
}
```

Keep this config stable. To upgrade DOMShot, update the npm package rather than changing the MCP command or args.

## Typical Tools

- `capture_domshot`: capture one selector or target.
- `inspect_domshot_page`: inspect visible screenshot candidates.
- `recommend_domshot_shots`: get candidate use and style suggestions.
- `create_domshot_plan`: plan captures before writing PNGs.
- `capture_domshot_plan`: capture a reviewed saved plan.
- `capture_domshot_set`: capture several related elements.
- `create_domshot_contact_sheet`: create a labeled comparison sheet.
- `create_domshot_shot_pack`: create a small final asset pack.

DOMShot writes files locally. Your MCP host decides how to display, store, or reference those files.

