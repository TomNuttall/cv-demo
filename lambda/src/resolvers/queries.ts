import { QueryResolvers } from '../__generated__/resolvers-types.js'

import education from './data/education.js'
import employment from './data/employement.js'
import profile from './data/profile.js'
import skills from './data/skills.js'
import letter from './data/covering-letter.js'

const queries: QueryResolvers = {
  getCV: async (_, { id }) => {
    return {
      profile,
      employment,
      education,
      skills,
    }
  },

  getCoveringLetter: async (_, { id }) => {
    return {
      letter,
    }
  },
}

export default queries
