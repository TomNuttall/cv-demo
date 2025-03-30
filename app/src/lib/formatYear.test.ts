import { formatYear } from './formatYear'

describe('formatYear()', () => {
  it('should handle year strings', () => {
    // Arrange
    const from = '6 Months'
    const to = '2000'

    // Act
    const res = formatYear(from, to)

    // Assert
    expect(res).toEqual('6 Months - 2000')
  })

  it('should handle optional to year', () => {
    // Arrange
    const from = '2000'
    const to = undefined

    // Act
    const res = formatYear(from, to)

    // Assert
    expect(res).toEqual('2000 - Current')
  })
})
