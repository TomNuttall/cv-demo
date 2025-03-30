import { render, screen } from '@testing-library/react'

import { Employment as EmploymentProps } from '../../__generated__/graphql'

import Employment from './Employment'

describe('<Employment />', () => {
  it('should render component', () => {
    // Arrange
    const details: EmploymentProps = {
      company: 'Company',
      location: 'Location',
      projectType: 'Project',
      projectDetails: ['Project 1', 'Project 2'],
      role: 'Job Role',
      roleDetails: ['Role 1', 'Role 2', 'Role 3'],
      yearFrom: '2000',
    }
    // Act
    render(<Employment {...details} />)

    // Assert
    expect(
      screen.getByRole('heading', { name: 'Job Role, Company' }),
    ).toBeInTheDocument()
    expect(screen.getByText('2000 - Current')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getAllByTestId('employment-details')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'Project' })).toBeInTheDocument()
    expect(screen.getAllByTestId('employment-projects')).toHaveLength(2)
  })
})
