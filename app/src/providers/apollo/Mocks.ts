import { MockedResponse } from '@apollo/client/testing'

import { GET_CV, GET_COVERINGLETTER } from '../../graphql/queries'
import { GetCvQuery, GetCoveringLetterQuery } from '../../__generated__/graphql'

import education from './data/education.json'
import employment from './data/employement.json'
import profile from './data/profile.json'
import skills from './data/skills.json'
import coveringletter from './data/covering-letter.json'

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
        letter: coveringletter,
      },
    },
  },
}
