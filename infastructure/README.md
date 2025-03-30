# CDK

## Run

```bash
yarn cdk synth --all
```

```bash
yarn cdk deploy --all
```

## GitHub

Github actions used for CI/CD

| Name                | Reason                                         |
| ------------------- | ---------------------------------------------- |
| AWS_BUCKET_ROLE_ARN | Role for put/delete S3 + invalidate Cloudfront |
| AWS_BUCKET_PATH     | S3 bucket uri                                  |
| AWS_DISTRIBUTION_ID | Cloudfront id                                  |

## Cloudfront Redirect

Function to handle spa redirect paths.

```javascript
function handler(event) {
  const request = event.request
  const uri = request.uri

  const match = uri.match(/^\/projects\/([^\/]+)\/([^\.]+)$/)
  const projectName = match ? match[1] : null

  // Check whether SPA path
  if (projectName) {
    request.uri = `/projects/${projectName}/index.html`
  }
  // Check whether the URI is missing a file name.
  else if (uri.endsWith('/')) {
    request.uri += 'index.html'
  }
  // Check whether the URI is missing a file extension.
  else if (!uri.includes('.')) {
    request.uri += '/index.html'
  }

  return request
}
```
