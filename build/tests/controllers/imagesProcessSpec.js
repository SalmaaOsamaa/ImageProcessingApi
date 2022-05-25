"use strict";
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
    }));
    it('should return an error message if width is not a number', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = "image";
        const height = 100;
        const width = 100;
        const res = yield req.get(`/api/images?filename=${filename}&height=${height}&width=${width}`);
        expect(res.statusCode).toBe(200);
    }), 20000);
});
