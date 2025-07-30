import { shield, allow, deny } from 'graphql-shield'
import { isAuthenticated } from './rule.js'

const permissions = shield({
  Query: {
    getMyApplications: isAuthenticated,
    getCV: isAuthenticated,
    getCoveringLetter: isAuthenticated,
  },
})

export default permissions
