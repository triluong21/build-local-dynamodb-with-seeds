# Build DynamoDb offline with serverless.yml
  ### 1. Start a new project.
  ### 2. In Terminal:
    a. Run <serverless create --template aws-nodejs>
    b. Run <yarn install>
    c. Run <yarn init>
    d. Run <yarn add serverless>
    e. Run <yarn add serverless-offline>
    f. Run <yarn add serverless-dynamodb-local>
    g. Run <sls dynamodb install>
  ### 3. In serverless.yml file:
    Copy/Paste dynamodb related info from this serverless.yml.
  ### 4. Run serverless to build dynamodb local
    Run <sls offline start>
  ### 5. Result:
    $ node_modules/.bin/sls offline start --stage dev
    Dynamodb Local Started, Visit: http://localhost:8000/shell
    Serverless: DynamoDB - created table my-dynamodb-local-table
    Seed running complete for table: my-dynamodb-local-table
    offline: Starting Offline: dev/us-east-1.
    offline: Offline [http for lambda] listening on http://localhost:3002
