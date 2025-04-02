import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as logs from 'aws-cdk-lib/aws-logs'

interface BackendStackProps extends cdk.StackProps {
  bucketName: string
  repoName: string
}

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BackendStackProps) {
    super(scope, id, props)

    const lambdaPolicys = [
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:ListBucket'],
        resources: [`arn:aws:s3:::${props.bucketName}`],
      }),
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:DeleteObject', 's3:GetObject', 's3:PutObject'],
        resources: [`arn:aws:s3:::${props.bucketName}/applications/*`],
      }),
    ]

    const graphQLLambda = this.createLambda('graphQL', lambdaPolicys)

    const githubRole = new iam.Role(this, 'roleGithub', {
      assumedBy: new iam.FederatedPrincipal(
        `arn:aws:iam::${props.env?.account}:oidc-provider/token.actions.githubusercontent.com`,
        {
          StringEquals: {
            'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
          },
          StringLike: {
            'token.actions.githubusercontent.com:sub': `repo:${props.repoName}:*`,
          },
        },
        'sts:AssumeRoleWithWebIdentity',
      ),
      description: 'Role assumed by GitHub Actions to deploy frontend',
    })

    githubRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['lambda:UpdateFunctionCode'],
        resources: [graphQLLambda.functionArn],
      }),
    )
  }

  private createLambda(
    lambdaName: string,
    permissionsPolicies: iam.PolicyStatement[],
  ) {
    const code = lambda.Code.fromInline(`
      exports.handler = async function(event) {
        return {
          statusCode: 200,
        };
      };
    `)

    const logGroup = new logs.LogGroup(this, `lambda${lambdaName}LogGroup`, {
      logGroupName: `/aws/lambda/lambda-${lambdaName}`,
      retention: logs.RetentionDays.TWO_WEEKS,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    const role = new iam.Role(this, `roleLambda${lambdaName}`, {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    })
    permissionsPolicies.forEach((policy) => role.addToPolicy(policy))

    role.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
          'logs:PutLogEvents',
        ],
        resources: [logGroup.logGroupArn],
      }),
    )

    return new lambda.Function(this, lambdaName, {
      functionName: `lambda-${lambdaName}`,
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code,
      logGroup,
      role,
    })
  }
}
