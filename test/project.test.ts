import { describe, it, expect, beforeAll } from 'vitest'
import Ajv, { type ValidateFunction } from 'ajv'
import { loadSchema, loadFixture } from './utils'

describe('project.schema.json', () => {
  let validate: ValidateFunction

  beforeAll(async () => {
    const ajv = new Ajv({
      keywords: ['markdownDescription'],
    })
    const schema = await loadSchema('project')
    validate = ajv.compile(schema)
  })

  it('should pass validator', async () => {
    const fixture = await loadFixture('project.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
