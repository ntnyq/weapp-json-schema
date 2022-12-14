import { describe, it, expect } from 'vitest'
import { loadFixture, createValidateFn } from './utils'

describe('project.schema.json', async () => {
  const validate = await createValidateFn('project')

  it('should pass validator', async () => {
    const fixture = await loadFixture('project.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
