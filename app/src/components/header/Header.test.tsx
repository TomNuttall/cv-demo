import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

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
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <MemoryRouter>
          <Header links={links} name={'Test User'} />
        </MemoryRouter>
      </ClerkProvider>,
    )

    // Assert
    expect(screen.getByText('TU')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'CV' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Covering Letter' }),
    ).toBeInTheDocument()
  })

  it('should update document title', () => {
    // Arrange

    // Act
    render(
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <MemoryRouter initialEntries={['/covering-letter']}>
          <Header links={links} name={'Test User'} />
        </MemoryRouter>
        ,
      </ClerkProvider>,
    )

    // Assert
    expect(document.title).toEqual('Test User - Covering Letter')
  })
})
