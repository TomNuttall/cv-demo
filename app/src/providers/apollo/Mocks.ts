import { MockedResponse } from '@apollo/client/testing'

import { GET_CV, GET_COVERINGLETTER } from '../../graphql/queries'
import { GetCvQuery, GetCoveringLetterQuery } from '../../__generated__/graphql'

import education from './fixtures/education'
import employment from './fixtures/employement'
import profile from './fixtures/profile'
import skills from './fixtures/skills'
import letter from './fixtures/covering-letter'

export const getCVMock: MockedResponse<GetCvQuery> = {
  request: {
    query: GET_CV,
  },
  result: {
    data: {
      getCV: {
        profile,
        employment,
        education,
        skills,
      },
    },
  },
}

export const getCoveringLetterMock: MockedResponse<GetCoveringLetterQuery> = {
  request: {
    query: GET_COVERINGLETTER,
  },
  result: {
    data: {
      getCoveringLetter: {
        letter,
      },
    },
  },
}
