import { expect, it } from 'vitest'
import { createValidateFn, loadFixture } from './utils'

it('app.schema.json', async () => {
  const validate = await createValidateFn('app')
  const fixture = await loadFixture('app.config')

  expect(validate(fixture)).toBeTruthy()
})
