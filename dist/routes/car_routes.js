"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const AWS = __importStar(require("aws-sdk"));
AWS.config.update({
    region: "us-east-1",
});
class CarRoutes {
    constructor() {
        this.dynamodb = new AWS.DynamoDB();
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }
    route(app) {
        app.get("/api/cars", (req, res) => {
            const dbParams = { TableName: "CarFleet" };
            this.docClient.scan(dbParams, (err, data) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: "Error: Server error",
                    });
                }
                else {
                    console.log(" D A T A ", data);
                    // const { Items } = data;
                    // res.send({
                    //   success: true,
                    //   message: "Loaded fruits",
                    //   cars: Items,
                    // });
                }
            });
        });
        app.post("/api/cars", (req, res) => {
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
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                }
                else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                    res.status(200).json({ message: "Post request successfull" });
                }
            });
        });
        app.get("/api/car", (req, res) => {
            console.log("request received, fetching car");
            let car = {};
            let dbParams = {
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
                }
                else {
                    car = data;
                    console.log("car data => ", data);
                    res.json(data);
                }
            });
        });
    }
}
exports.CarRoutes = CarRoutes;
//# sourceMappingURL=car_routes.js.map