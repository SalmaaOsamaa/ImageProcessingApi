import sharp, {Sharp} from "sharp";

export const sharpResize = async(
    file:any,
    h: number | null,
    w: number | null
): Promise<Sharp> =>{
    const image = sharp(file);
    const resizeImage = image.resize(w, h);
    return resizeImage
}

export default sharpResize;

