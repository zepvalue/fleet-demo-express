"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
class CarRoutes {
    route(app) {
        app.get("/", (req, res) => {
            res.status(200).json({ message: "Get request successfull" });
        });
        app.post("/api/test", (req, res) => {
            res.status(200).json({ message: "Post request successfull" });
        });
    }
}
exports.CarRoutes = CarRoutes;
//# sourceMappingURL=car_routes.js.map