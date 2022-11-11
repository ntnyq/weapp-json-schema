import { describe, it, expect } from 'vitest'
import { loadFixture, createValidateFn } from './utils'

describe('app.schema.json', async () => {
  const validate = await createValidateFn('app')

  it('should pass validator', async () => {
    const fixture = await loadFixture('app.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
