import { render, screen } from '@testing-library/react'

import Icon from './Icon'

describe('<Icon />', () => {
  it('should render component', () => {
    // Arrange
    const icon = <span>Icon Image</span>

    // Act
    render(<Icon icon={icon}>Icon Text</Icon>)

    // Assert
    expect(screen.getByText('Icon Image')).toBeInTheDocument()
    expect(screen.getByText('Icon Text')).toBeInTheDocument()
  })
})
