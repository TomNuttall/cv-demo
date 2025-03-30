import { useQuery } from '@apollo/client'

import { GET_COVERINGLETTER } from '../../graphql/queries'

import './CoveringLetter.css'

const CoveringLetter: React.FC = () => {
  const { data, loading, error } = useQuery(GET_COVERINGLETTER)

  if (loading) return <span>Loading...</span>
  if (error) return <span>Error</span>

  if (!data?.getCoveringLetter) return <></>

  const { letter } = data.getCoveringLetter

  return (
    <div className="covering-letter">
      {letter.map((text, idx) => (
        <p key={`cl_${idx}`}>{text}</p>
      ))}
    </div>
  )
}

export default CoveringLetter
