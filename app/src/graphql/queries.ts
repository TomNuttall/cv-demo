import { gql } from '../__generated__/gql'

export const GET_MY_APPLICATIONS = gql(`
  query GetMyApplications {
    getMyApplications
  }
`)

export const GET_CV = gql(`
  query GetCV($id: String) {
    getCV(id: $id) {
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
  query GetCoveringLetter($id: String) {
    getCoveringLetter(id: $id) {
      letter
    }
  }
`)
