import { Calendar, Location } from '../../assets/icons'
import Icon from '../utility/icon'
import { formatYear } from '../../lib/formatYear'

import { Education as EducationProps } from '../../__generated__/graphql'

import './Education.css'

const Education: React.FC<EducationProps> = ({
  course,
  courseDetails,
  school,
  yearFrom,
  yearTo,
}) => {
  return (
    <div className="subsection education">
      <div className="education__summary">
        <h3>{course}</h3>
        <div className="education__place">
          <Icon icon={<Calendar title="dates" />}>
            <div className="education__date">
              {formatYear(yearFrom, yearTo)}
            </div>
          </Icon>
          <Icon icon={<Location title="location" />}>{school}</Icon>
        </div>
      </div>
      {courseDetails.length > 0 && (
        <ul>
          {courseDetails.map((details, idx) => (
            <li key={idx} data-testid="education-details">
              {details}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Education
