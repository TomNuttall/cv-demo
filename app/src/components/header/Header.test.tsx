import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
import { ClerkProvider } from '@clerk/clerk-react'

const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

import Header from './Header'

describe('<Header />', () => {
  const links = [
    { name: 'CV', src: '/cv' },
    { name: 'Covering Letter', src: '/covering-letter' },
  ]
  const publishableKey = `pk_test_${window.btoa('$')}`

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
      <ClerkProvider publishableKey={publishableKey}>
        <MemoryRouter initialEntries={['/covering-letter']}>
          <Header links={links} name={'Test User'} />
        </MemoryRouter>
      </ClerkProvider>,
    )

    // Assert
    expect(document.title).toEqual('Test User - Covering Letter')
  })
})
