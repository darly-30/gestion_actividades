import { Router } from "express";
import { createActivity, deleteActivity, updateActivity, getActivitiesByUserId } from "../controllers/activities.controller";
import { validateBody } from "../middlewares/validate";
import { createActivitySchema, updateActivitySchema, deleteActivitySchema, getActivitiesByUserIdSchema} from "../schemas/activities.schemas";
import { authenticateToken } from "../middlewares/auth";

const router = Router();
router.use(authenticateToken);
router.post('/create',validateBody(createActivitySchema), createActivity);
router.put('/update', validateBody(updateActivitySchema), updateActivity);
router.delete('/delete', validateBody(deleteActivitySchema), deleteActivity);
router.post('/getByUserId', validateBody(getActivitiesByUserIdSchema), getActivitiesByUserId);

export default router;