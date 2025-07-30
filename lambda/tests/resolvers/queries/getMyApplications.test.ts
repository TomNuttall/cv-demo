import { beforeEach, describe, it, expect } from '@jest/globals'
import { mockClient } from 'aws-sdk-client-mock'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

import queries from '../../../src/resolvers/queries'
import { Context } from '../../../src/context'

const s3Mock = mockClient(S3Client)
const context: Context = {
  isLoggedIn: true,
  s3Client: new S3Client(),
}

describe('getMyApplications', () => {
  beforeEach(() => {
    s3Mock.reset()
  })

  it('should return query result', async () => {
    // Arrange
    s3Mock
      .on(ListObjectsV2Command)
      .resolves({ CommonPrefixes: [{ Prefix: 'abc/' }] })

    const parent = {}
    const args = {}

    // Act
    //@ts-ignore
    const res = await queries.getMyApplications(parent, args, context)

    // Assert
    expect(res).toMatchObject(expect.arrayContaining([expect.any(String)]))
  })
})
