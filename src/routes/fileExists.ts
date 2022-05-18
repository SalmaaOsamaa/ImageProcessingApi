import fs from 'fs';
export const fileExists = async (filePath: string): Promise<boolean> =>{
    const res = await fs.existsSync(filePath);
    console.log("filePath", res);

    return res;
}