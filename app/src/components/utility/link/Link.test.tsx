import { render, screen } from '@testing-library/react'

import Link from './Link'

describe('<Link />', () => {
  it('should render component', () => {
    // Arrange

    // Act
    render(<Link href="/">Test Link</Link>)

    // Assert
    expect(screen.getByRole('link', { name: 'Test Link' })).toBeInTheDocument()
  })
})
