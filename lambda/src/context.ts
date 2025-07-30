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

const authLoggedIn = async (event: any): Promise<boolean> => {
  let isLoggedIn = false
  try {
    const req = {
      ...event,
      url: event.headers.origin ?? event.headers.Origin,
    }
    delete req.body

    const { isSignedIn } = await clerkClient.authenticateRequest(
      req,
      process.env.NODE_PRODUCTION
        ? {
            jwtKey: process.env.CLERK_JWT_KEY,
            authorizedParties: ['https://tomnuttall.dev'],
          }
        : {},
    )

    isLoggedIn = isSignedIn
  } catch (e) {
    console.info(e)
  }

  return isLoggedIn
}

const createContext = async ({
  event,
  context,
}: {
  event: any
  context: BaseContext
}): Promise<Context> => {
  const isLoggedIn = await authLoggedIn(event)

  return { ...context, s3Client, isLoggedIn }
}

export { type Context, createContext }
