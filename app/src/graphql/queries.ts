import { gql } from '../__generated__/gql'

export const GET_CV = gql(`
  query GetCV {
    getCV {
      profile {
        name
        email
        github
        about
      }
      employment {
        company
        location
        projectType
        projectDetails
        role
        roleDetails
        yearFrom
        yearTo
      }
      education {
        course
        courseDetails
        school
        yearFrom
        yearTo
      }
      skills {
        languages
        tools
        certificates
      }
    }
  }
`)

export const GET_COVERINGLETTER = gql(`
  query GetCoveringLetter {
    getCoveringLetter {
      letter
    }
  }
`)
