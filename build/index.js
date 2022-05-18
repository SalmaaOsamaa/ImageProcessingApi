"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerFilter = exports.multerStorage = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const multer_1 = __importDefault(require("multer"));
const PORT = 8000;
exports.multerStorage = multer_1.default.memoryStorage();
//filtering files with multer
const multerFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};
exports.multerFilter = multerFilter;
app.use((0, multer_1.default)({ fileFilter: exports.multerFilter, fileStorage: exports.multerStorage }));
app.listen(PORT, () => { console.log("server is running on port 8000"); });
module.exports = app;
