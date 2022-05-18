import express from "express";
import resize, {readThumbnailFull} from "./controller/home";
import validateParams from "./middleware/validateParams";
const router = express();
router.get("/a", validateParams, resize);
router.get("", readThumbnailFull);

export default router;