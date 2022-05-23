"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateParams = (req, res, next) => {
    const { query } = req;
    const params = ["filename", "height", "width"];
    for (let i = 0; i < params.length; i++) {
        const param = params[i];
        if (query[param] === undefined) {
            res.status(404).send("param is missing");
            return;
        }
        const value = query[param];
        if (param == "filename" && typeof value !== "string") {
            console.log("file undefined");
            res.status(404).send("filename should be a string");
            return;
        }
        if (param == "height" || param == "width") {
            const number = Number(value);
            if (!number) {
                res.status(404).send("height and width should be a  number");
                return;
            }
        }
    }
    next();
};
exports.default = validateParams;
