import { Router } from "express";
import { auth } from "../../MiddleWare/auth.middleware.js";
import * as userController from './controller/user.controller.js'
import { asyncHandler } from "../../services/errorHandling.js";
import uploadFile, { HME } from "../../services/multer.js";
const router = Router();

router.get('/profile', auth, asyncHandler(userController.profile));
router.put('/profilePicture',auth,uploadFile().single('image'),HME,asyncHandler(userController.profilePicture))


export default router;
