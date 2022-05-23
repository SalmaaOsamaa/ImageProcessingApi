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
const imageSharpResizer_1 = __importDefault(require("../../routes/imageSharpResizer"));
describe("Sharp ResizeImage", () => {
    it("should return error if the filename doesn't exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const fileName = "image";
        const height = 100;
        const width = 100;
        const resizedImgPath = `./public/${fileName}${height}x${height}.jpg`;
        const res = yield (0, imageSharpResizer_1.default)(fileName, height, width);
        res.toFile(resizedImgPath, (err) => {
            expect(err.message).toBeDefined();
        });
    }));
    it("it should be resolved successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageSharpResizer_1.default)("image", 500, 500)).toBeResolved();
    }));
});
function expectAsync(arg0) {
    throw new Error("Function not implemented.");
}
