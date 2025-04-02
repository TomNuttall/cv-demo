import { Calendar, Location } from '../../assets/icons'
import Icon from '../utility/icon'
import MDContent from '../utility/mdcontent/MDContent'
import { formatYear } from '../../lib/formatYear'

import { Employment as EmploymentProps } from '../../__generated__/graphql'

import './Employment.css'

const Employment: React.FC<EmploymentProps> = ({
  company,
  location,
  projectDetails,
  projectType,
  role,
  roleDetails,
  yearFrom,
  yearTo,
}) => {
  return (
    <div className="subsection employment">
      <div className="employment__summary">
        <h3>{`${role}, ${company}`}</h3>
        <div className="employment__about">
          <Icon icon={<Calendar title="dates" />}>
            <div className="employment__date">
              {formatYear(yearFrom, yearTo)}
            </div>
          </Icon>
          <Icon icon={<Location title="location" />}>{location}</Icon>
        </div>
      </div>
      {roleDetails.length > 0 && (
        <ul>
          {roleDetails.map((details, idx) => (
            <li key={`role_${idx}`} data-testid="employment-details">
              {details}
            </li>
          ))}
        </ul>
      )}

      {projectDetails.length > 0 && (
        <div className="employment__projects">
          <h4>{projectType}</h4>
          <ul>
            {projectDetails.map((details, idx) => (
              <li key={`project_${idx}`} data-testid="employment-projects">
                <MDContent content={details} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Employment
