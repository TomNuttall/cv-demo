import { beforeEach, describe, it, expect } from '@jest/globals'
import { mockClient } from 'aws-sdk-client-mock'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { sdkStreamMixin } from '@smithy/util-stream'
import { Readable } from 'stream'

import queries from '../../../src/resolvers/queries'
import { Context } from '../../../src/context'

const s3Mock = mockClient(S3Client)
const context: Context = {
  isLoggedIn: false,
  s3Client: new S3Client(),
}

describe('getCV', () => {
  beforeEach(() => {
    s3Mock.reset()
  })

  it('should return query result', async () => {
    // Arrange
    const response = {
      profile: {
        about: '',
        github: '',
        email: '',
        name: '',
      },
      employment: [
        {
          company: '',
          location: '',
          projectType: '',
          projectDetails: [''],
          role: '',
          roleDetails: [''],
          yearFrom: '',
          yearTo: '',
        },
      ],
      education: [
        {
          course: '',
          courseDetails: [''],
          school: '',
          yearFrom: '',
          yearTo: '',
        },
      ],
      skills: {
        languages: [''],
        tools: [''],
        certificates: [''],
      },
    }
    const stream = new Readable()
    stream.push(JSON.stringify(response))
    stream.push(null)

    const sdkStream = sdkStreamMixin(stream)
    s3Mock.on(GetObjectCommand).resolves({ Body: sdkStream })

    const parent = {}
    const args = {}

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
