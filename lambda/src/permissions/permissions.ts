import { shield, allow, deny } from 'graphql-shield'
import { isAuthenticated } from './rule.js'

const permissions = shield(
  {
    Query: {
      '*': deny,
      getMyApplications: isAuthenticated,
      getCV: allow,
      getCoveringLetter: allow,
    },
  },
  { fallbackError: 'Error' },
)

export default permissions
