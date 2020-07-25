import * as AWS from "aws-sdk";

export class AWSService {
  private dynamoDB = new AWS.DynamoDB();

  public setup() {
    AWS.config.update({
      region: "us-east-1",
    });
    AWS.config.dynamodb = { endpoint: "http://localhost:8000" };
  }

  public createDinamoDB() {}

  public getDB() {
    return this.dynamoDB;
  }
}
