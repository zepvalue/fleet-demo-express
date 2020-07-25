import { Application, Request, Response } from "express";
export class CarRoutes {
  public route(app: Application) {
    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get request successfull" });
    });
    app.post("cars", (req: Request, res: Response) => {
      res.status(200).json({ message: "Post request successfull" });
    });
  }
}
