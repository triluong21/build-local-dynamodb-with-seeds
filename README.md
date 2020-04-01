# Buil DynamoDb offline with serverless.yml
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
