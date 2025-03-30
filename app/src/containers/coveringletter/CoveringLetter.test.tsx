import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { getCoveringLetterMock } from '../../providers/apollo/Mocks'

import CoveringLetter from './CoveringLetter'

describe('<CoveringLetter />', () => {
  it('should render container', async () => {
    // Arrange
    const mocks = [getCoveringLetterMock]

    // Act
    render(
      <MockedProvider mocks={mocks}>
        <CoveringLetter />
      </MockedProvider>,
    )

    // Assert
    expect((await screen.findAllByRole('paragraph')).length).toBeGreaterThan(1)
  })
})
