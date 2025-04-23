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
  event,
  context,
}: {
  event: any
  context: any
}): Promise<Context> => {
  let isLoggedIn = false

  try {
    const req = { ...event, url: event.headers.origin }
    delete req.body

    const res = await clerkClient.authenticateRequest(req)
    console.info('RES: ', res)
    isLoggedIn = res.isSignedIn
  } catch (e) {
    console.info(e)
  }
  return { s3Client, isLoggedIn }
}

export { type Context, createContext }
