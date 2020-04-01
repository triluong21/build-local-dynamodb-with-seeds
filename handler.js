'use strict';

module.exports.hello = async event => {
  const CONFIG__DB_TABLE = process.env.CONFIG__DB_TABLE;
  const CONFIG_DYNAMODB_ENDPOINT = process.env.CONFIG_DYNAMODB_ENDPOINT;
  const IS_OFFLINE = process.env.IS_OFFLINE;

  let dynamoDb;
  if (IS_OFFLINE === 'true') {
    dynamoDb = new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: CONFIG_DYNAMODB_ENDPOINT,
    });
  } else {
    dynamoDb = new AWS.DynamoDB.DocumentClient();
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
