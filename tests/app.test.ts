import { expect, it } from 'vitest'
import { createSchemaValidator, loadFixture } from './utils'

it('app.schema.json', async () => {
  const validate = await createSchemaValidator('app')
  const fixture = await loadFixture('app.config')

  expect(validate(fixture)).toBeTruthy()
})
