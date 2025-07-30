import { QueryResolvers } from '../__generated__/resolvers-types.js'
import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3'

const { BUCKET_NAME, BUCKET_PREFIX } = process.env

export const getContent = async (
  s3Client: S3Client,
  key: string,
): Promise<string | undefined> => {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME ?? '',
      Key: key,
    })

    const response = await s3Client.send(command)
    return response?.Body?.transformToString()
  } catch (e) {
    console.info(e)
    return undefined
  }
}

const queries: QueryResolvers = {
  getMyApplications: async (_, __, { s3Client }) => {
    const bucket = BUCKET_NAME ?? ''
    const prefix = BUCKET_PREFIX ?? ''

    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
      Delimiter: '/',
    })

    const response = await s3Client.send(command)
    if (!response.CommonPrefixes) return []

    return response.CommonPrefixes.map(({ Prefix }) => {
      if (!Prefix) return ''

      return Prefix.replace(prefix, '').replace('/', '')
    })
  },

  getCV: async (_, { id = 'demo' }, { s3Client }) => {
    const content = await getContent(s3Client, `${BUCKET_PREFIX}${id}/cv.json`)
    if (!content) return null

    const { profile, employment, education, skills } = JSON.parse(content)
    return {
      profile,
      employment,
      education,
      skills,
    }
  },

  getCoveringLetter: async (_, { id = 'demo' }, { s3Client }) => {
    const content = await getContent(
      s3Client,
      `${BUCKET_PREFIX}${id}/coveringletter.json`,
    )
    if (!content) return null

    const { letter } = JSON.parse(content)
    return {
      letter,
    }
  },
}

export default queries
