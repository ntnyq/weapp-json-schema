import { expect, it } from 'vitest'
import { createSchemaValidator, loadFixture } from './utils'

it('sitemap.schema.json', async () => {
  const validate = await createSchemaValidator('sitemap')
  const fixture = await loadFixture('sitemap.config')

  expect(validate(fixture)).toBeTruthy()
})
