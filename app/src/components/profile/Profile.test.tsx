import { render, screen } from '@testing-library/react'

import { Profile as ProfileProps } from '../../__generated__/graphql'

import Profile from './Profile'

describe('<Profile />', () => {
  it('should render component', () => {
    // Arrange
    const details: ProfileProps = {
      email: 'test@example.com',
      github: 'https://github.com',
      about: 'About Me',
    }
    // Act
    render(<Profile {...details} />)

    // Assert
    expect(
      screen.getByRole('link', { name: 'test@example.com' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'https://github.com' }),
    ).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })
})
