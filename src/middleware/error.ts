import { Request, Response } from "express";

const errorHandler = (req:Request, res:Response):void =>{
    res.send("<h3> error in processing image </h3>")
};

export default errorHandler;