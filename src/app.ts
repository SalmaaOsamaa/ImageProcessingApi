
import express,{Request, Response} from 'express';
import router from "./routers";
import logger from './middleware/logger';
const app = express();
const PORT = 8000;
app.use(express.static("public"));
app.use(logger);

app.use(express.json({type: ""}));
app.use(express.urlencoded({extended: false}));
app.use(router);



app.get("/", (_req:Request, res:Response): void =>{
    res.send("hello");
});

app.listen(PORT, ():void=>{console.log("server is running on port 8000")});
// app.use(errorHandler);

module.exports = app;
