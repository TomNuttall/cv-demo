import { describe, it, expect } from '@jest/globals'
import queries from '../../../src/resolvers/queries'
import { Context } from '../../../src/context'

describe('getCoveringLetter', () => {
  it('should return query result', async () => {
    // Arrange
    const parent = {}
    const args = {}
    const context: Context = {}

    // Act
    //@ts-ignore
    const res = await queries.getCoveringLetter(parent, args, context)

    // Assert
    expect(res).toEqual({
      letter: expect.any(Array),
    })
  })
})
