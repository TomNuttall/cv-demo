import { render, screen } from '@testing-library/react'

import MDContent from './MDContent'

describe('<MDContent />', () => {
  it('should render component with a link', () => {
    // Arrange
    const text = '[Link Name](https://test.com)'

    // Act
    render(<MDContent content={text} />)

    // Assert
    expect(screen.getByRole('link', { name: 'Link Name' })).toBeInTheDocument()
  })
})
