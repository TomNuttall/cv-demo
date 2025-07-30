import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Actions from './Actions'

describe('<Actions />', () => {
  it('should render component', async () => {
    // Arrange
    const onSavePdf = vitest.fn()
    const applicationId = 'abc123'
    const setApplicationId = vitest.fn()
    const myApplications = [applicationId]

    // Act
    render(
      <Actions
        onSavePdf={onSavePdf}
        applicationId={applicationId}
        setApplicationId={setApplicationId}
        myApplications={myApplications}
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
    const myApplications = [applicationId]

    // Act
    render(
      <Actions
        onSavePdf={onSavePdf}
        applicationId={applicationId}
        setApplicationId={setApplicationId}
        myApplications={myApplications}
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
    const applicationId = 'xyz-123'
    const setApplicationId = vitest.fn()
    const myApplications = [applicationId]

    // Act
    render(
      <Actions
        onSavePdf={onSavePdf}
        applicationId={''}
        setApplicationId={setApplicationId}
        myApplications={myApplications}
      />,
    )

    const optionButton = screen.getByRole('option', { name: applicationId })
    await userEvent.click(optionButton)

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    // Assert
    expect(setApplicationId).toHaveBeenCalled()
  })
})
