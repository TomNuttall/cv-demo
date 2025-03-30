import { render, screen } from '@testing-library/react'

import { Skills as SkillsProps } from '../../__generated__/graphql'

import Skills from './Skills'

describe('<Skills />', () => {
  it('should render component', () => {
    // Arrange
    const details: SkillsProps = {
      languages: ['Language 1', 'Language 2'],
      tools: ['Tool 1', 'Tool 2', 'Tool 3'],
      certificates: ['Certifcate 1'],
    }
    // Act
    render(<Skills {...details} />)

    // Assert
    expect(
      screen.getByRole('heading', { name: 'Languages' }),
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('skills-languages')).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Tools' })).toBeInTheDocument()
    expect(screen.getAllByTestId('skills-tools')).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: 'Certificates' }),
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('skills-certificates')).toHaveLength(1)
  })
})
