import { describe, it, expect, beforeAll } from 'vitest'
import Ajv, { type ValidateFunction } from 'ajv'
import { loadSchema, loadFixture } from './utils'

describe('app.schema.json', () => {
  let validate: ValidateFunction

  beforeAll(async () => {
    const ajv = new Ajv({
      keywords: ['markdownDescription'],
    })
    const schema = await loadSchema('app')
    validate = ajv.compile(schema)
  })

  it('should pass validator', async () => {
    const fixture = await loadFixture('app.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
