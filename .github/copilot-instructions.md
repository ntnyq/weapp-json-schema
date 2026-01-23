# Copilot Instructions for weapp-json-schema

## Project Overview

This project provides JSON Schema definitions for WeChat Mini Program (weapp) configuration files. The schemas enable IDE autocomplete and validation for `app.json`, `page.json`, `component.json`, `project.config.json`, and `sitemap.json` files used in WeChat Mini Program development.

**Schema Files**: Each `*.schema.json` file follows JSON Schema Draft-07 and includes:

- `$schema` and `$id` fields pointing to `jsonschema.ntnyq.com`
- `definitions` section for reusable patterns (colors, permissions, match-types)
- Properties with `description` and `markdownDescription` fields (markdownDescription includes links to WeChat official docs)
- Validation patterns like `^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$` for hex colors

## Architecture & Key Patterns

### Schema Structure Convention

All schemas follow this pattern:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://jsonschema.ntnyq.com/<name>.schema.json",
  "definitions": {
    /* reusable patterns */
  },
  "properties": {
    /* validation rules */
  }
}
```

**Reusable Definitions**: Common patterns like `hex-color`, `permission`, `sub-package` are defined in `definitions` sections and referenced via `$ref`. When modifying color validation, update the definition pattern, not individual properties.

**WeChat-Specific Patterns**:

- Page paths: `^pages/[a-zA-Z0-9-_/]+$`
- Component names: `^[a-zA-Z0-9-_]+$` (lowercase letters, hyphens, underscores only)
- Component paths must not start with `wx-` (reserved prefix): `^(?!wx-).+`

### Test Structure

Tests use AJV library to validate fixture files against schemas:

- [tests/utils.ts](../tests/utils.ts): Helper functions `loadSchema()`, `loadFixture()`, `createSchemaValidator()`
- AJV configured with `keywords: ['markdownDescription']` to support WeChat-specific extension field
- Each test file ([app.test.ts](../tests/app.test.ts), [component.test.ts](../tests/component.test.ts), etc.) validates one schema against its fixture
- Fixtures in [tests/fixtures/](../tests/fixtures/) include `$schema` reference to parent directory

## Development Workflows

### Running Tests

```bash
# Run Vitest
pnpm test
```

### Linting

```bash
# ESLint with auto-fix via nano-staged config
pnpm lint
```

Uses `@ntnyq/eslint-config` preset (flat config format in [eslint.config.mjs](../eslint.config.mjs)).

### Adding/Modifying Schemas

1. Update the `*.schema.json` file with new properties or validation rules
2. Add corresponding test case in [tests/fixtures/](../tests/fixtures/) demonstrating valid usage
3. Run `pnpm test` to ensure AJV validation passes
4. Update WeChat official docs references in `markdownDescription` when adding features

### Release Process

```bash
pnpm release       # Runs bumpp for version bump + npm publish
```

## Project-Specific Conventions

**NPM Package Export Strategy**: The [package.json](../package.json) uses `"exports": { "./*": "./*" }` to allow importing individual schema files like `weapp-json-schema/app.schema.json`.

**Schema Hosting**: Schemas are published to NPM and CDN-hosted at `https://unpkg.com/weapp-json-schema/` for direct use in VS Code settings.

**Chinese Descriptions**: All `description` fields are in Chinese (Simplified) to match WeChat's official documentation language.

**Pattern Properties**: [component.schema.json](../component.schema.json) and [app.schema.json](../app.schema.json) use `patternProperties` for `usingComponents` object to validate component name-path pairs dynamically.

## Key Files Reference

- [app.schema.json](../app.schema.json): Global config (940 lines) - most complex schema with sub-packages, permissions, tabBar, plugins
- [component.schema.json](../component.schema.json): Simplest schema (only 5 properties: component, addGlobalClass, styleIsolation, usingComponents, virtualHost)
- [page.schema.json](../page.schema.json): Page-level window configuration
- [project.schema.json](../project.schema.json): IDE project settings (651 lines) - includes skeleton screen, minification, sourcemap configs
- [sitemap.schema.json](../sitemap.schema.json): SEO/indexing rules for mini program pages
