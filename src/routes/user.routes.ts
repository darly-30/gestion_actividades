import { Router } from "express";
import {createUser, login} from '../controllers/users'

const router = Router()

router.post('/user', createUser )
//ese /createUser es una nueva ruta, cuando acceda a ella se va a crear un usuario
router.post('/login', login )

export default router