# weapp-json-schema

[![CI](https://github.com/ntnyq/weapp-json-schema/workflows/CI/badge.svg)](https://github.com/ntnyq/weapp-json-schema/actions)
[![NPM VERSION](https://img.shields.io/npm/v/weapp-json-schema.svg)](https://www.npmjs.com/package/weapp-json-schema)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/weapp-json-schema.svg)](https://www.npmjs.com/package/weapp-json-schema)
[![LICENSE](https://img.shields.io/github/license/ntnyq/weapp-json-schema.svg)](https://github.com/ntnyq/weapp-json-schema/blob/main/LICENSE)

> JSON schema for weapp.

## Usage

### Project config

```jsonc
// Add line bellow to your `project.config.json`
{
  "$schema": "https://jsonschema.ntnyq.com/project.schema.json"
}
```

### App config

```jsonc
// Add line bellow to your `app.json`
{
  "$schema": "https://jsonschema.ntnyq.com/app.schema.json"
}
```

### Page config

```jsonc
// Add line bellow to your `<page_name>.json`
{
  "$schema": "https://jsonschema.ntnyq.com/page.schema.json"
}
```

## Schemas

- [project.schema.json](./project.schema.json) Schema for `project.config.json`
- [app.schema.json](./app.schema.json) Schema for `app.json`
- [page.schema.json](./page.schema.json) Schema for `<page_name>.json`

## Refs

- [微信官方文档 - 项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)
- [微信官方文档 - 全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)
