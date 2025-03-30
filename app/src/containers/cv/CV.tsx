import { useQuery } from '@apollo/client'

import Education from '../../components/education'
import Employment from '../../components/employment'
import Profile from '../../components/profile'
import Skills from '../../components/skills'

import { GET_CV } from '../../graphql/queries'

import './CV.css'

const CV: React.FC = () => {
  const { data, loading, error } = useQuery(GET_CV)

  if (loading) return <span>Loading...</span>
  if (error) return <span>Error</span>

  if (!data?.getCV) return <></>

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
