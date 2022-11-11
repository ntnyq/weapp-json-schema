import { describe, it, expect } from 'vitest'
import { loadFixture, createValidateFn } from './utils'

describe('page.schema.json', async () => {
  const validate = await createValidateFn('page')

  it('should pass validator', async () => {
    const fixture = await loadFixture('page.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
