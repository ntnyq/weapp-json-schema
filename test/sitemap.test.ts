import { describe, it, expect } from 'vitest'
import { loadFixture, createValidateFn } from './utils'

describe('sitemap.schema.json', async () => {
  const validate = await createValidateFn('sitemap')

  it('should pass validator', async () => {
    const fixture = await loadFixture('sitemap.config')
    const valid = validate(fixture)
    expect(valid).toBeTruthy()
  })
})
