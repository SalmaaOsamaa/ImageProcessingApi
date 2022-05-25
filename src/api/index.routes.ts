import express from 'express';
import validateParams from '../middleware/validateParams';
const router: express.Router = express();
router.get(
    "/resize",
    validateParams,

);
export default router;
