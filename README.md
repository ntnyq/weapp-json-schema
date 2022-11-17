# weapp-json-schema

[![CI](https://github.com/ntnyq/weapp-json-schema/workflows/CI/badge.svg)](https://github.com/ntnyq/weapp-json-schema/actions)
[![NPM VERSION](https://img.shields.io/npm/v/weapp-json-schema.svg)](https://www.npmjs.com/package/weapp-json-schema)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/weapp-json-schema.svg)](https://www.npmjs.com/package/weapp-json-schema)
[![LICENSE](https://img.shields.io/github/license/ntnyq/weapp-json-schema.svg)](https://github.com/ntnyq/weapp-json-schema/blob/main/LICENSE)

> JSON schema for weapp.

## Usage

### Project schema

```jsonc
{
  // Add line bellow to your `project.config.json`
  "$schema": "https://jsonschema.ntnyq.com/project.schema.json"
}
```

### App schema

```jsonc
{
  // Add line bellow to your `app.json`
  "$schema": "https://jsonschema.ntnyq.com/app.schema.json"
}
```

### Page schema

```jsonc
{
  // Add line bellow to your `<page_name>.json`
  "$schema": "https://jsonschema.ntnyq.com/page.schema.json"
}
```

### Sitemap schema

```jsonc
{
  // Add line bellow to your `sitemap.json`
  "$schema": "https://jsonschema.ntnyq.com/sitemap.schema.json"
}
```

### Component schema

```jsonc
{
  // Add line bellow to your `<component>.json`
  "$schema": "https://jsonschema.ntnyq.com/component.schema.json"
}
```

## Schemas

- [project.schema.json](./project.schema.json) Schema for `project.config.json`
- [app.schema.json](./app.schema.json) Schema for `app.json`
- [page.schema.json](./page.schema.json) Schema for `<page_name>.json`
- [sitemap.schema.json](./sitemap.schema.json) Schema for `sitemap.json`
- [component.schema.json](./component.schema.json) Schema for `<component>.json`

## Refs

- [微信官方文档 - 项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)
- [微信官方文档 - 全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)
- [微信官方文档 - 页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)
- [微信官方文档 - sitemap 配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html)
- [微信官方文档 - 自定义组件配置](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component)

## License

[MIT](./LICENSE) License © 2022-PRESENT [ntnyq](https://github.com/ntnyq)
