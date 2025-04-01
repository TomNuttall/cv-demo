import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Actions from './Actions'

describe('<Actions />', () => {
  it('should render component', async () => {
    // Arrange
    const onSavePdf = vitest.fn()
    const applicationId = 'abc123'
    const setApplicationId = vitest.fn()

    // Act
    render(
      <Actions
        onSavePdf={onSavePdf}
        applicationId={applicationId}
        setApplicationId={setApplicationId}
      />,
    )

    // Assert
    expect(screen.getByDisplayValue('abc123')).toBeInTheDocument()
  })

  it('should trigger onSavePdf function on button press', async () => {
    // Arrange
    const onSavePdf = vitest.fn()
    const applicationId = 'abc123'
    const setApplicationId = vitest.fn()

    // Act
    render(
      <Actions
        onSavePdf={onSavePdf}
        applicationId={applicationId}
        setApplicationId={setApplicationId}
      />,
    )

    const button = screen.getByRole('button', { name: 'Save PDF' })
    await userEvent.click(button)

    // Assert
    expect(onSavePdf).toHaveBeenCalled()
  })

  it('should trigger setApplicationId function on button press', async () => {
    // Arrange
    const onSavePdf = vitest.fn()
    const applicationId = 'abc123'
    const setApplicationId = vitest.fn()

    // Act
    render(
      <Actions
        onSavePdf={onSavePdf}
        applicationId={applicationId}
        setApplicationId={setApplicationId}
      />,
    )

    const input = screen.getByRole('textbox', { name: 'Id' })
    await userEvent.clear(input)
    await userEvent.type(input, '1')

    // Assert
    expect(setApplicationId).toHaveBeenCalled()
  })
})
