import { expect, it } from 'vitest'
import { createValidateFn, loadFixture } from './utils'

it('sitemap.schema.json', async () => {
  const validate = await createValidateFn('sitemap')
  const fixture = await loadFixture('sitemap.config')

  expect(validate(fixture)).toBeTruthy()
})
