import { BaseContext } from '@apollo/server'
import { S3Client } from '@aws-sdk/client-s3'
import { createClerkClient } from '@clerk/backend'

interface Context extends BaseContext {
  s3Client: S3Client
  isLoggedIn: boolean
}

const s3Client = new S3Client({ region: 'eu-west-2' })
const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
})

const createContext = async ({
  req,
  res,
}: {
  req: any
  res: any
}): Promise<Context> => {
  const { isSignedIn } = await clerkClient.authenticateRequest(req)
  console.info('SignedIn: ', isSignedIn)
  return { s3Client, isLoggedIn: isSignedIn }
}

export { type Context, createContext }
