import { BaseContext } from '@apollo/server'
import { S3Client } from '@aws-sdk/client-s3'

interface Context extends BaseContext {
  s3Client: S3Client
}

const s3Client = new S3Client({ region: 'eu-west-2' })

const createContext = ({ req, res }: { req: any; res: any }): Context => {
  return { s3Client }
}

export { type Context, createContext }
