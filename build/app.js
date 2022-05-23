"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const error_1 = __importDefault(require("./middleware/error"));
const logger_1 = __importDefault(require("./middleware/logger"));
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.static("public"));
app.use(logger_1.default);
app.use(express_1.default.json({ type: "" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(routers_1.default);
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(PORT, () => { console.log("server is running on port 8000"); });
app.use(error_1.default);
module.exports = app;
