import { readFile } from 'node:fs/promises'
import path from 'node:path'
import Ajv from 'ajv'
import type { Options as AjvOptions, Schema } from 'ajv'

const resolve = (...args: string[]): string =>
  path.resolve(import.meta.dirname, '..', ...args)

export async function loadSchema(name: string): Promise<Schema> {
  const schemaPath = resolve(`${name}.schema.json`)
  const schema = await readFile(schemaPath, 'utf-8')
  return JSON.parse(schema)
}

export async function loadFixture(name: string) {
  const fixturePath = resolve(`tests/fixtures/${name}.json`)
  const fixture = await readFile(fixturePath, 'utf-8')
  return JSON.parse(fixture)
}

export async function createValidateFn(
  schemaName: string,
  options?: AjvOptions,
) {
  const ajv = new Ajv({
    keywords: ['markdownDescription'],
    ...options,
  })
  const schema = await loadSchema(schemaName)
  return ajv.compile(schema)
}
