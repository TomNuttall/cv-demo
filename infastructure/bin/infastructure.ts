#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { FrontendStack } from '../lib/frontend-stack'
import { BackendStack } from '../lib/backend-stack'
import 'dotenv/config'

const config = {
  env: {
    account: process.env.AWS_ACCOUNT_NUMBER,
    region: process.env.AWS_ACCOUNT_REGION,
  },
}

const app = new cdk.App()

new FrontendStack(app, 'cv-template-frontend-stack', {
  env: config.env,
  bucketName: `${process.env.BUCKET_NAME}`,
  cloudfrontId: `${process.env.CLOUDFRONT_ID}`,
  repoName: `${process.env.REPO_NAME}`,
})
new BackendStack(app, 'cv-template-backend-stack', {
  env: config.env,
  repoName: `${process.env.REPO_NAME}`,
})
