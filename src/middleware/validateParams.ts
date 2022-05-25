import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
const validateParams = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { query } = req;

  const params = ['filename', 'height', 'width'];
  let invalid = false
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    if (query[param] === undefined) {
        invalid = true
      res.status(404).send('param is missing');
    }
    const value = query[param];
    if (param == 'filename') {
      if (typeof value !== 'string') {
          invalid = true
        res.status(404).send('filename should be a string');
      }
     const isExists = fs.existsSync(path.join('public', `${value}.jpg`));
      if (!isExists) {
          invalid = true
        res.status(404).send("filename doesn't exists");
      }
    }
    if (param == 'height' || param == 'width') {
      const number = Number(value);
      if (!number) {
          invalid = true
        res.status(404).send('height and width should be a  number');
      }
    }
  }
  if(!invalid) next();
};
export default validateParams;
