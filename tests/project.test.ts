import { expect, it } from 'vitest'
import { createValidateFn, loadFixture } from './utils'

it('project.schema.json', async () => {
  const validate = await createValidateFn('project')
  const fixture = await loadFixture('project.config')

  expect(validate(fixture)).toBeTruthy()
})
