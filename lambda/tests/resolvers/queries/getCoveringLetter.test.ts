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

describe('getCoveringLetter', () => {
  beforeEach(() => {
    s3Mock.reset()
  })

  it('should return query result', async () => {
    // Arrange
    const response = {
      letter: [''],
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
    const res = await queries.getCoveringLetter(parent, args, context)

    // Assert
    expect(res).toEqual({
      letter: expect.any(Array),
    })
  })
})
