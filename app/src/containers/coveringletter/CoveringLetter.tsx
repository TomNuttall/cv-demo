import { useQuery } from '@apollo/client'

import MDContent from '../../components/utility/mdcontent'
import { GET_COVERINGLETTER } from '../../graphql/queries'

import './CoveringLetter.css'

type CoveringLetterProps = {
  id?: string
}

const CoveringLetter: React.FC<CoveringLetterProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_COVERINGLETTER, {
    variables: { id },
  })

  if (loading) return <div className="loader" />

  if (error || !data?.getCoveringLetter) return <></>

  const { letter } = data.getCoveringLetter

  return (
    <div className="covering-letter">
      {letter.map((text, idx) => (
        <p key={`cl_${idx}`}>
          <MDContent content={text} />
        </p>
      ))}
    </div>
  )
}

export default CoveringLetter
