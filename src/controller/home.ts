// @ts-nocheck
import fs from "fs";
import { Request, Response, NextFunction } from "express";
import path from "path";
import { fileExists } from '../routes/fileExists';
import sharpResize from "../routes/imageSharpResizer";



const resize = async(
    req: Request,
    res:Response,
    next:NextFunction
): Promise<void> =>{
    const{filename, height, width} = req.query;
    const file: string = filename as unknown as string;
    const h: number | null = height? parseInt(height as string, 15): null;
    const w: number | null = width? parseInt(width as string, 15) : null;


try{
    const imagePath = `${f}${w}x${h}.jpg`;
    const resizePath = `./public/${f}${w}x${h}.jpg`;
    const imagePathExists = await fileExists(path.join(""));
    if(imagePathExists){
        res.sendFile(`/${imagePath}`, {root:path.join("./public")});
    } else {
        const response = await sharpResize(file, h, w);
        response.toFile(resizePath, (err:Error)=>{
            if(err){
                resize.status(403).send({
                    ok:"failed",
                    message: err.message,
                });
            } else{
                res.sendFile(`/${imagePath}`, {root:path.join("./public")});
            }
        });
    }
} catch(e) {
    console.log(e);
}
}
export const readThumbnailFull = (
    req:Request,
    res:Response,
    next:NextFunction
): void=>{
    const folder = "public";
    const data = fs.readdirSync(folder);
    console.log("data", data);

    const thumbnails = data.map((data)=>{
        return `http://localhost:8000/${data}`;
    });
    res.status(200).send(thumbnails);
};
export default resize;