import { expect, it } from 'vitest'
import { createSchemaValidator, loadFixture } from './utils'

it('page.schema.json', async () => {
  const validate = await createSchemaValidator('page')
  const fixture = await loadFixture('page.config')

  expect(validate(fixture)).toBeTruthy()
})
