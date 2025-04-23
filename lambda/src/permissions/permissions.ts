import { shield, allow, deny } from 'graphql-shield'
//import { isAuthenticated } from './rules.js'

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
