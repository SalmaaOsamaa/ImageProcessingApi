// @ts-nocheck

import sharpResize from "../../routes/imageSharpResizer";

describe("Sharp ResizeImage", ()=>{
    it("should return error if the filename doesn't exist", async():Promise<void> =>{
        const fileName = "image";
        const height =100;
        const width = 100;
        const resizedImgPath =  `./public/${fileName}${height}x${height}.jpg`;
        const res = await sharpResize(fileName,height, width);
        res.toFile(resizedImgPath, (err:Error) =>{
            expect(err.message).toBeDefined();
        });
    });

    it("it should be resolved successfully", async():Promise<void> =>{
        await expectAsync(sharpResize("image",500,500)).toBeResolved();
    });
});

