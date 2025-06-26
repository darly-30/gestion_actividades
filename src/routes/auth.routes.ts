import { Router } from "express";
import {registerUser, loginUser} from '../controllers/auth.controller'
import { validateBody } from "../middlewares/validate";
import { loginUserSchema, registerUserSchema } from "../schemas/auth.schemas";



const router = Router()

router.post('/register', validateBody(registerUserSchema), registerUser );
router.post('/login',validateBody(loginUserSchema), loginUser);

export default router