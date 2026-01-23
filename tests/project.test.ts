import { expect, it } from 'vitest'
import { createSchemaValidator, loadFixture } from './utils'

it('project.schema.json', async () => {
  const validate = await createSchemaValidator('project')
  const fixture = await loadFixture('project.config')

  expect(validate(fixture)).toBeTruthy()
})
