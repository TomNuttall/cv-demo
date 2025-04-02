import Markdown from 'react-markdown'

import Link from '../link'

type MDContentProps = {
  content: string
}

const MDContent: React.FC<MDContentProps> = ({ content }) => {
  return (
    <Markdown
      components={{
        a: Link,
        p: ({ children }) => <>{children}</>,
      }}
    >
      {content}
    </Markdown>
  )
}

export default MDContent
