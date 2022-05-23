import express from "express";
import resize, {readThumbnailFull} from "./controller/home";
import validateParams from "./middleware/validateParams";
const router = express();
router.get("/api/images", validateParams, resize);
router.get("/api/thumbnail", readThumbnailFull);

export default router;