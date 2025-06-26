import { Router } from "express";
import authRouter from "./auth.routes";
import activityRouter from "./activities.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/activities", activityRouter);

export default router;