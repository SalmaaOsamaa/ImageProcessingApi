"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const validateParams = (req, res, next) => {
    const { query } = req;
    const params = ['filename', 'height', 'width'];
    let invalid = false;
    for (let i = 0; i < params.length; i++) {
        const param = params[i];
        if (query[param] === undefined) {
            invalid = true;
            res.status(404).send('param is missing');
        }
        const value = query[param];
        if (param == 'filename') {
            if (typeof value !== 'string') {
                invalid = true;
                res.status(404).send('filename should be a string');
            }
            const isExists = fs_1.default.existsSync(path_1.default.join('public', `${value}.jpg`));
            if (!isExists) {
                invalid = true;
                res.status(404).send("filename doesn't exists");
            }
        }
        if (param == 'height' || param == 'width') {
            const number = Number(value);
            if (!number) {
                invalid = true;
                res.status(404).send('height and width should be a  number');
            }
        }
    }
    if (!invalid)
        next();
};
exports.default = validateParams;
