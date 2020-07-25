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
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export default new App().app;
