import { useQuery } from '@apollo/client'
import { Loading } from 'react-loading-dot'

import Education from '../../components/education'
import Employment from '../../components/employment'
import Profile from '../../components/profile'
import Skills from '../../components/skills'

import { GET_CV } from '../../graphql/queries'

import './CV.css'

type CVProps = {
  id?: string
}

const CV: React.FC<CVProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_CV, { variables: { id } })

  if (loading)
    return <Loading dots="3" size="1rem" margin="0.5rem" background="#2b2d42" />

  if (error || !data?.getCV) return <></>

  const { profile, education, employment, skills } = data.getCV
  return (
    <div className="cv">
      <h1>{profile.name}</h1>
      <Profile {...profile} />
      <section>
        <h2>Employment</h2>
        {employment.map((job, idx) => (
          <Employment key={idx} {...job} />
        ))}
      </section>
      <section>
        <h2>Education</h2>
        {education.map((course, idx) => (
          <Education key={idx} {...course} />
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        <Skills {...skills} />
      </section>
    </div>
  )
}

export default CV
