import { describe, it, expect } from '@jest/globals'
import queries from '../../../src/resolvers/queries'
import { Context } from '../../../src/context'

describe('getCV', () => {
  it('should return query result', async () => {
    // Arrange
    const parent = {}
    const args = {}
    const context: Context = {}

    // Act
    //@ts-ignore
    const res = await queries.getCV(parent, args, context)

    // Assert
    expect(res).toMatchObject({
      profile: {
        about: expect.any(String),
        email: expect.any(String),
        github: expect.any(String),
        name: expect.any(String),
      },
      education: expect.arrayContaining([
        {
          course: expect.any(String),
          school: expect.any(String),
          yearFrom: expect.any(String),
          yearTo: expect.any(String),
          courseDetails: expect.arrayContaining([expect.any(String)]),
        },
      ]),
      employment: expect.arrayContaining([
        {
          company: expect.any(String),
          location: expect.any(String),
          yearFrom: expect.any(String),
          yearTo: expect.any(String),
          role: expect.any(String),
          roleDetails: expect.arrayContaining([expect.any(String)]),
          projectType: expect.any(String),
          projectDetails: expect.arrayContaining([expect.any(String)]),
        },
      ]),
      skills: {
        languages: expect.arrayContaining([expect.any(String)]),
        tools: expect.arrayContaining([expect.any(String)]),
        certificates: expect.arrayContaining([expect.any(String)]),
      },
    })
  })
})
