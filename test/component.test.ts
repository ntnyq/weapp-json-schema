import { expect, it } from 'vitest'
import { createValidateFn, loadFixture } from './utils'

it('component.schema.json', async () => {
  const validate = await createValidateFn('component')
  const fixture = await loadFixture('component.config')

  expect(validate(fixture)).toBeTruthy()
})
