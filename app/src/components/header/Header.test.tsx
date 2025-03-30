import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from './Header'

describe('<Header />', () => {
  const links = [
    { name: 'CV', src: '/cv' },
    { name: 'Covering Letter', src: '/covering-letter' },
  ]

  it('should render component', () => {
    // Arrange

    // Act
    render(
      <MemoryRouter>
        <Header links={links} name={'Test User'} />
      </MemoryRouter>,
    )

    // Assert
    expect(screen.getByText('TU')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'CV' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Covering Letter' }),
    ).toBeInTheDocument()
  })

  it('should render component with children', () => {
    // Arrange
    const children = <button>CTA</button>

    // Act
    render(
      <MemoryRouter>
        <Header links={links} name={'Test User'}>
          {children}
        </Header>
      </MemoryRouter>,
    )

    // Assert
    expect(screen.getByRole('button', { name: 'CTA' })).toBeInTheDocument()
  })

  it('should update document title', () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={['/covering-letter']}>
        <Header links={links} name={'Test User'} />
      </MemoryRouter>,
    )

    // Assert
    expect(document.title).toEqual('Test User - Covering Letter')
  })
})
