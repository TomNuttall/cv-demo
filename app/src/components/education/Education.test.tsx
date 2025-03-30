import { render, screen } from '@testing-library/react'

import { Education as EducationProps } from '../../__generated__/graphql'

import Education from './Education'

describe('<Education />', () => {
  it('should render component', () => {
    // Arrange
    const details: EducationProps = {
      course: 'Course',
      courseDetails: ['Modules included', 'Project'],
      school: 'University',
      yearFrom: '2000',
      yearTo: '2004',
    }
    // Act
    render(<Education {...details} />)

    // Assert
    expect(screen.getByRole('heading', { name: 'Course' })).toBeInTheDocument()
    expect(screen.getByText('2000 - 2004')).toBeInTheDocument()
    expect(screen.getByText('University')).toBeInTheDocument()
    expect(screen.getAllByTestId('education-details')).toHaveLength(2)
  })
})
