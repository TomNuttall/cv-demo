import * as cdk from 'aws-cdk-lib'
import { Match, Template } from 'aws-cdk-lib/assertions'
import { BackendStack } from '../lib/backend-stack'

describe('BackendStack', () => {
  it('should create an IAM role', () => {
    // Arrange
    const props = {
      env: {
        account: '123',
        region: 'local',
      },
      repoName: 'xyz',
    }
    const app = new cdk.App()
    const stack = new BackendStack(app, 'Stack', props)

    // Act
    const template = Template.fromStack(stack)

    // Assert
    template.hasResourceProperties(
      'AWS::IAM::Role',
      Match.objectLike({
        AssumeRolePolicyDocument: {
          Version: '2012-10-17',
          Statement: [
            {
              Action: 'sts:AssumeRoleWithWebIdentity',
              Effect: 'Allow',
              Principal: {
                Federated:
                  'arn:aws:iam::123:oidc-provider/token.actions.githubusercontent.com',
              },
            },
          ],
        },
      }),
    )
  })
})
