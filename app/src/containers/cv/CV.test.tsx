import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { getCVMock } from '../../providers/apollo/Mocks'

import CV from './CV'

describe('<CV />', () => {
  it('should render container', async () => {
    // Arrange
    const mocks = [getCVMock]

    // Act
    render(
      <MockedProvider mocks={mocks}>
        <CV />
      </MockedProvider>,
    )

    // Assert
    expect(
      await screen.findByRole('heading', { name: 'Employment' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('heading', { name: 'Education' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('heading', { name: 'Skills' }),
    ).toBeInTheDocument()
  })
})
