import Markdown from 'react-markdown'

import { Code, Certificate, Wrench } from '../../assets/icons'
import Icon from '../utility/icon'
import Link from '../utility/link'

import { Skills as SkillsProps } from '../../__generated__/graphql'

import './Skills.css'

const Skills: React.FC<SkillsProps> = ({ languages, tools, certificates }) => {
  return (
    <div className="skills">
      <h3>
        <div className="skills__icon">
          <Icon icon={<Code title="code" />} />
        </div>
        Languages
      </h3>
      <ul>
        {languages.map((language, idx) => (
          <li key={`language_${idx}`} data-testid="skills-languages">
            <span className="skills__item">{language}</span>
          </li>
        ))}
      </ul>

      <h3>
        <div className="skills__icon">
          <Icon icon={<Wrench title="tools" />} />
        </div>
        Tools
      </h3>
      <ul>
        {tools.map((tool, idx) => (
          <li key={`tool_${idx}`} data-testid="skills-tools">
            <span className="skills__item">{tool}</span>
          </li>
        ))}
      </ul>

      <h3>
        <div className="skills__icon">
          <Icon icon={<Certificate title="certificate" />} />
        </div>
        Certificates
      </h3>
      <ul>
        {certificates.map((certificate, idx) => (
          <li key={`certificate_${idx}`} data-testid="skills-certificates">
            <Markdown
              components={{
                a: Link,
                p: ({ children }) => <>{children}</>,
              }}
            >
              {certificate}
            </Markdown>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
