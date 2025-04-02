import { QueryResolvers } from '../__generated__/resolvers-types.js'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'

const { BUCKET_NAME } = process.env

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
  getCV: async (_, { id }, { s3Client }) => {
    const content = await getContent(
      s3Client,
      `applications/${id ? `${id}` : 'demo'}/cv.json`,
    )
    if (!content) return null

    const { profile, employment, education, skills } = JSON.parse(content)
    return {
      profile,
      employment,
      education,
      skills,
    }
  },

  getCoveringLetter: async (_, { id }, { s3Client }) => {
    const content = await getContent(
      s3Client,
      `applications/${id ? `${id}` : 'demo'}/coveringletter.json`,
    )
    if (!content) return null

    const { letter } = JSON.parse(content)
    return {
      letter,
    }
  },
}

export default queries
