import sharp, {Sharp} from "sharp";

export const sharpResize = async(
    file: string | null,
    h: number | null,
    w: number | null
): Promise<Sharp> =>{
    const buffer = ``;
    const image = await sharp(buffer);
    const resizeImage = await image.resize(w, h);

    return resizeImage
}

export default sharpResize;

