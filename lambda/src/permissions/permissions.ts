import { shield, allow, deny } from 'graphql-shield'

const permissions = shield(
  {
    Query: {
      '*': deny,
      getCV: allow,
      getCoveringLetter: allow,
    },
  },
  { fallbackError: 'Error' },
)

export default permissions
