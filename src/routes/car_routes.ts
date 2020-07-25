import { Application, Request, Response } from "express";
import * as AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

export class CarRoutes {
  private dynamodb = new AWS.DynamoDB();
  private docClient = new AWS.DynamoDB.DocumentClient();

  public route(app: Application) {
    app.get("/api/cars", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get request successfull" });
    });

    app.post("/api/cars", (req: Request, res: Response) => {
      let dbParams = {
        TableName: "CarFleet",
        Item: {
          id: 123,
          name: "AAA",
          vin: "ASD423E3D3RF5",
          make: "Mazda",
          model: "CX-5",
          year: "2019",
          fuelType: "petrol",
          type: "SUV",
          Position: {
            lat: 3.995,
            lon: 43.2221,
          },
          odometer: 43546,
          fuel: 33.4,
          battery: 12.7,
        },
      };
      console.log("Adding a new item...");
      this.docClient.put(dbParams, function (err, data) {
        if (err) {
          console.error(
            "Unable to add item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
          res.status(200).json({ message: "Post request successfull" });
        }
      });
    });

    app.get("/api/car", (req: Request, res: Response) => {
      console.log("request received, fetching car");
      let car = {};
      let dbParams: AWS.DynamoDB.GetItemInput = {
        TableName: "CarFleet",
        Key: {
          id: {
            N: "12345678",
          },
        },
      };
      this.dynamodb.getItem(dbParams, (err, data) => {
        if (err) {
          console.error("No car found", err);
          res.json(car);
        } else {
          car = data;
          console.log("car data => ", data);
          res.json(data);
        }
      });
    });
  }
}
