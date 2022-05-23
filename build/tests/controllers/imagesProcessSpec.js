"use strict";
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../app")); //server file 
const supertest_1 = __importDefault(require("supertest"));
const req = (0, supertest_1.default)(app_1.default);
describe('image processing resize controller and middleware', () => {
    it('it should return error when one of the params is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get("/api/images");
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("Error: Parameter(s) missing..");
    }));
    it('should return an error message if width is not a number', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get(`/api/images?filename=${filename}&height=${height}&width=${width}`);
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("height and width should be numbers");
    }));
    it('it should return an error when height ismissing ', () => __awaiter(void 0, void 0, void 0, function* () {
        const fileName = "image";
        const height = "hello";
        const width = 300;
        const res = yield req.get(`/api/images?filename=${fileName}&height=${height}&width=${width}`);
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("height and width should be a number");
    }));
});
function expect(statusCode) {
    throw new Error("Function not implemented.");
}
function done() {
    throw new Error("Function not implemented.");
}
