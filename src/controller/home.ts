import fs from 'fs';
import { Request, Response} from 'express';
import path from 'path';
import { fileExists } from '../routes/fileExists';
import sharpResize from '../routes/imageSharpResizer';

const resize = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { filename, height, width } = req.query;
  const file: string = filename as unknown as string;
  const h: number | null = height ? parseInt(height as string, 10) : null;
  const w: number | null = width ? parseInt(width as string, 10) : null;

  try {
      console.log(w,h)
    const imagePath = `${file}${w}x${h}.jpg`;
    const resizePath = path.join('public', imagePath);
    const imagePathExists = await fileExists(path.join('public', imagePath));
    if (imagePathExists) {
      res.sendFile(`/${imagePath}`, { root: path.join('./public') });
    } else {
      fs.readFile(path.join('public', `${file}.jpg`), async (err, file) => {
        const resizedBuffer = await sharpResize(file, h, w);
        if (resizedBuffer) {
          resizedBuffer.toFile(resizePath, (err: Error) => {
            if (err) {
              res.status(403).send({
                ok: 'failed',
                message: err.message,
              });
            } else {
              res.sendFile(`/${imagePath}`,{root:path.join('public')});
            }
          });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
};
export const readThumbnailFull = (
  req: Request,
  res: Response,
): void => {
  const folder = 'public';
  const data = fs.readdirSync(folder);
  console.log('data', data);

  const thumbnails = data.map((data) => {
    return `http://localhost:8000/${data}`;
  });
  res.status(200).send(thumbnails);
};
export default resize;
