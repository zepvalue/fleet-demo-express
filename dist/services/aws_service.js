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
exports.AWSService = void 0;
const AWS = __importStar(require("aws-sdk"));
class AWSService {
    constructor() {
        this.dynamoDB = new AWS.DynamoDB();
    }
    setup() {
        AWS.config.update({
            region: "us-east-1",
        });
        AWS.config.dynamodb = { endpoint: "http://localhost:8000" };
    }
    createDinamoDB() { }
    getDB() {
        return this.dynamoDB;
    }
}
exports.AWSService = AWSService;
//# sourceMappingURL=aws_service.js.map