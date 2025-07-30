import { shield, allow, deny } from 'graphql-shield'
import { isAuthenticated } from './rule.js'

const permissions = shield(
  {
    Query: {
      getMyApplications: isAuthenticated,
      getCV: isAuthenticated,
      getCoveringLetter: isAuthenticated,
    },
  },
  { fallbackRule: deny, fallbackError: 'Error' },
)

export default permissions
