import { Request, Response } from "express";

const errorHandler = (req:Request, res:Response):void =>{
    res.send("<p> error in processing image </p>")
};

export default errorHandler;