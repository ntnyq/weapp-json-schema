# AGENTS

This repository publishes JSON Schema files for WeChat Mini Program config files.

## Start Here

- Read [README.md](README.md) for schema usage and external documentation links.
- Run setup with pnpm:
  - `pnpm install`
  - `pnpm run release:check` (format check + lint + tests)

## Core Files

- [project.schema.json](project.schema.json)
- [app.schema.json](app.schema.json)
- [page.schema.json](page.schema.json)
- [component.schema.json](component.schema.json)
- [sitemap.schema.json](sitemap.schema.json)
- [tests/utils.ts](tests/utils.ts)
- [tests/fixtures](tests/fixtures)

## Commands

- `pnpm test`: run Vitest schema validation tests.
- `pnpm lint`: run ESLint.
- `pnpm format`: apply oxfmt.
- `pnpm format:check`: verify formatting.
- `pnpm release:check`: run format check, lint, and tests in parallel.

## Conventions

- Use pnpm (see [package.json](package.json) `packageManager`).
- Formatting is oxfmt only. Do not introduce Prettier config or Prettier-specific changes.
- Keep schema files as the source of truth; tests validate schema behavior through fixtures.
- Follow the existing test pattern: one test file per schema and matching fixture names.

## Schema Change Workflow

1. Update one or more `*.schema.json` files.
2. Add or update matching fixtures under [tests/fixtures](tests/fixtures) when behavior changes.
3. Update or add tests in [tests](tests) if new fields or constraints are introduced.
4. Run `pnpm run release:check` before finalizing.

## CI Expectations

- CI runs [`.github/workflows/ci.yml`](.github/workflows/ci.yml):
  - `pnpm install --frozen-lockfile`
  - `pnpm run release:check`
- Keep lockfile and scripts consistent with these checks.

## Pitfalls To Avoid

- Forgetting fixture updates after schema changes.
- Changing formatting behavior instead of following [`.oxfmtrc.jsonc`](.oxfmtrc.jsonc).
- Adding tooling that conflicts with [eslint.config.mjs](eslint.config.mjs) (`oxfmt: true`, `prettier: false`).
