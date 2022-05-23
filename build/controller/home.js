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
exports.readThumbnailFull = void 0;
// @ts-nocheck
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fileExists_1 = require("../routes/fileExists");
const imageSharpResizer_1 = __importDefault(require("../routes/imageSharpResizer"));
const resize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename, height, width } = req.query;
    const file = filename;
    const h = height ? parseInt(height, 10) : null;
    const w = width ? parseInt(width, 10) : null;
    try {
        console.log(w, h);
        const imagePath = `${file}${w}x${h}.jpg`;
        const resizePath = path_1.default.join('public', imagePath);
        const imagePathExists = yield (0, fileExists_1.fileExists)(path_1.default.join('public', imagePath));
        if (imagePathExists) {
            res.sendFile(`/${imagePath}`, { root: path_1.default.join('./public') });
        }
        else {
            fs_1.default.readFile(path_1.default.join('public', `${file}.jpg`), (err, file) => __awaiter(void 0, void 0, void 0, function* () {
                const resizedBuffer = yield (0, imageSharpResizer_1.default)(file, h, w);
                if (resizedBuffer) {
                    resizedBuffer.toFile(resizePath, (err) => {
                        if (err) {
                            res.status(403).send({
                                ok: 'failed',
                                message: err.message,
                            });
                        }
                        else {
                            res.sendFile(`/${imagePath}`, { root: path_1.default.join('public') });
                        }
                    });
                }
            }));
        }
    }
    catch (e) {
        console.log(e);
    }
});
const readThumbnailFull = (req, res, next) => {
    const folder = 'public';
    const data = fs_1.default.readdirSync(folder);
    console.log('data', data);
    const thumbnails = data.map((data) => {
        return `http://localhost:8000/${data}`;
    });
    res.status(200).send(thumbnails);
};
exports.readThumbnailFull = readThumbnailFull;
exports.default = resize;
