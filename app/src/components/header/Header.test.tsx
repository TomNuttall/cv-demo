import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

vi.mock('@clerk/clerk-react', () => {
  return {
    ClerkProvider: ({ children }: any) => children,
    SignedIn: ({ children }: any) => children,
    SignedOut: ({ children }: any) => children,
    SignInButton: ({ children }: any) => children,
    SignOutButton: ({ children }: any) => children,
    UserButton: () => <button>Mock UserButton</button>,
  }
})

import Header from './Header'

describe('<Header />', () => {
  const links = [
    { name: 'CV', src: '/cv' },
    { name: 'Covering Letter', src: '/covering-letter' },
  ]
  const publishableKey = 'pk_test_key'

  it('should render component', () => {
    // Arrange

    // Act
    render(
      <ClerkProvider publishableKey={publishableKey}>
        <MemoryRouter>
          <Header links={links} name={'Test User'} />
        </MemoryRouter>
      </ClerkProvider>,
    )

    // Assert
    expect(screen.getByRole('link', { name: 'CV' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Covering Letter' }),
    ).toBeInTheDocument()
  })

  it('should update document title', () => {
    // Arrange

    // Act
    render(
      <ClerkProvider publishableKey={publishableKey}>
        <MemoryRouter initialEntries={['/covering-letter']}>
          <Header links={links} name={'Test User'} />
        </MemoryRouter>
      </ClerkProvider>,
    )

    console.log(document.title)
    // Assert
    expect(document.title).toEqual('Test User - Covering Letter')
  })
})
