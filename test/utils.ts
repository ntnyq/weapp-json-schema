import path from 'node:path'
import { promises as fs } from 'node:fs'
import { URL, fileURLToPath } from 'node:url'
import Ajv from 'ajv'
import type { Schema, Options as AjvOptions } from 'ajv'

export const __dirname = fileURLToPath(new URL('.', import.meta.url))
const resolve = (...args: string[]) => path.resolve(__dirname, '..', ...args)

export async function loadSchema(name: string): Promise<Schema> {
  const schemaPath = resolve(`${name}.schema.json`)
  const schema = await fs.readFile(schemaPath, 'utf-8')
  return JSON.parse(schema)
}

export async function loadFixture(name: string) {
  const fixturePath = resolve(`test/fixtures/${name}.json`)
  const fixture = await fs.readFile(fixturePath, 'utf-8')
  return JSON.parse(fixture)
}

export async function createValidateFn(schemaName: string, options?: AjvOptions) {
  const ajv = new Ajv({
    keywords: ['markdownDescription'],
    ...options,
  })
  const schema = await loadSchema(schemaName)
  return ajv.compile(schema)
}
