import express, { Application } from "express";
import * as bodyParser from "body-parser";
import { CarRoutes } from "./routes/car_routes";
import * as AWS from "aws-sdk";

class App {
  public app: Application;
  private car_routes: CarRoutes = new CarRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.car_routes.route(this.app);
    // this.awsSetup();
  }

  private config(): void {
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // support application/json type post data
    this.app.use(bodyParser.json());
  }

  //   private awsSetup(): void {
  //     AWS.config.update({
  //       region: "us-east-1",
  //     });
  //   }
}
export default new App().app;
