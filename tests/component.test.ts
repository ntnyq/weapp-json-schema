import { expect, it } from 'vitest'
import { createSchemaValidator, loadFixture } from './utils'

it('component.schema.json', async () => {
  const validate = await createSchemaValidator('component')
  const fixture = await loadFixture('component.config')

  expect(validate(fixture)).toBeTruthy()
})
