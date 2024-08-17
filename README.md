# weapp-json-schema

[![CI](https://github.com/ntnyq/weapp-json-schema/workflows/CI/badge.svg)](https://github.com/ntnyq/weapp-json-schema/actions)
[![NPM VERSION](https://img.shields.io/npm/v/weapp-json-schema.svg)](https://www.npmjs.com/package/weapp-json-schema)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/weapp-json-schema.svg)](https://www.npmjs.com/package/weapp-json-schema)
[![LICENSE](https://img.shields.io/github/license/ntnyq/weapp-json-schema.svg)](https://github.com/ntnyq/weapp-json-schema/blob/main/LICENSE)

> JSON schema for weapp.

## Usage

You can config in workspace's `.vscode/settings.json` to use json schemas or config in every specific files.

### 1. Config in workspace `.vscode/settings.json`

```json
{
  "json.schemas": [
    {
      "fileMatch": ["project.config.json", "project.private.config.json"],
      "url": "https://unpkg.com/weapp-json-schema/project.schema.json"
    },
    {
      "fileMatch": ["app.json"],
      "url": "https://unpkg.com/weapp-json-schema/app.schema.json"
    },
    {
      "fileMatch": ["**/pages/**/*.json"],
      "url": "https://unpkg.com/weapp-json-schema/page.schema.json"
    },
    {
      "fileMatch": ["sitemap.json"],
      "url": "https://unpkg.com/weapp-json-schema/sitemap.schema.json"
    },
    {
      "fileMatch": ["**/components/**/*.json"],
      "url": "https://unpkg.com/weapp-json-schema/component.schema.json"
    }
  ]
}
```

### 2. Use json schema in specific file:

#### Project schema

Config in your `project.config.json` or `project.private.config.json`:

```json
{
  "$schema": "https://unpkg.com/weapp-json-schema/project.schema.json"
}
```

#### App schema

Config in your `app.json`:

```json
{
  "$schema": "https://unpkg.com/weapp-json-schema/app.schema.json"
}
```

#### Page schema

Config in your `<page_name>.json`:

```json
{
  "$schema": "https://unpkg.com/weapp-json-schema/page.schema.json"
}
```

#### Sitemap schema

Config in your `sitemap.json`:

```json
{
  "$schema": "https://unpkg.com/weapp-json-schema/sitemap.schema.json"
}
```

#### Component schema

Config in your `<component_name>.json`:

```json
{
  "$schema": "https://unpkg.com/weapp-json-schema/component.schema.json"
}
```

## Schemas

- [project.schema.json](./project.schema.json) Schema for `project.config.json`
- [app.schema.json](./app.schema.json) Schema for `app.json`
- [page.schema.json](./page.schema.json) Schema for `<page_name>.json`
- [sitemap.schema.json](./sitemap.schema.json) Schema for `sitemap.json`
- [component.schema.json](./component.schema.json) Schema for `<component_name>.json`

## Refs

- [微信官方文档 - 项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)
- [微信官方文档 - 全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)
- [微信官方文档 - 页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)
- [微信官方文档 - sitemap 配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html)
- [微信官方文档 - 自定义组件配置](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component)

# Updated At

2024-05-29

## License

[MIT](./LICENSE) License © 2022-PRESENT [ntnyq](https://github.com/ntnyq)
