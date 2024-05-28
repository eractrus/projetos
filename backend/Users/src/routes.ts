// Packs
import { Router } from "express"

//import of user
import createUserController from "./controller/user/createUserController"
import deleteUserController from "./controller/user/deleteUserController"
import updateUserController from "./controller/user/updateUserController"
import getDataAccountController from "./controller/user/getDataAccountController"

//import of Auth
import loginController from "./controller/Auth/loginController"


//MIDDLEWARES
import { isAuth } from './middlewares/isAtuth'
const router = Router()

//Create user router
router.post('/user', new createUserController().callService)
router.delete('/user',isAuth, new deleteUserController().callService)
router.put('/user', new updateUserController().callService)
router.get('/user/details',isAuth, new getDataAccountController().callservice)


//Auth user router
router.post('/auth', new loginController().callService)

export default router