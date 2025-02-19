import { expect, it } from 'vitest'
import { createValidateFn, loadFixture } from './utils'

it('page.schema.json', async () => {
  const validate = await createValidateFn('page')
  const fixture = await loadFixture('page.config')

  expect(validate(fixture)).toBeTruthy()
})
