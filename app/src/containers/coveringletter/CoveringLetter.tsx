import { useQuery } from '@apollo/client'
import Markdown from 'react-markdown'

import Link from '../../components/utility/link'

import { GET_COVERINGLETTER } from '../../graphql/queries'

import './CoveringLetter.css'

type CoveringLetterProps = {
  id?: string
}

const CoveringLetter: React.FC<CoveringLetterProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_COVERINGLETTER, {
    variables: { id },
  })

  if (loading) return <span>Loading...</span>
  if (error) return <span>Error</span>

  if (!data?.getCoveringLetter) return <></>

  const { letter } = data.getCoveringLetter

  return (
    <div className="covering-letter">
      {letter.map((text, idx) => (
        <p key={`cl_${idx}`}>
          <Markdown
            components={{
              a: Link,
              p: ({ children }) => <>{children}</>,
            }}
          >
            {text}
          </Markdown>
        </p>
      ))}
    </div>
  )
}

export default CoveringLetter
