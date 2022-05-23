import express, {Request, Response, NextFunction} from 'express';
import validateParams from '../middleware/validateParams';
const router: express.Router = express();
router.get(
    "/resize",
    validateParams,

);
export default router;
