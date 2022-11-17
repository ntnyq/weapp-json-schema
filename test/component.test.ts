import { describe, it, expect } from 'vitest'
import { loadFixture, createValidateFn } from './utils'

describe('component.schema.json', async () => {
  const validate = await createValidateFn('component')

  it('should pass validator', async () => {
    const fixture = await loadFixture('component.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
