import { Router } from "express";
import * as authController from './controller/auth.controller.js'
import { asyncHandler } from "../../services/errorHandling.js";
import { validation } from "../../MiddleWare/validation.middleware.js";
import { schemaSingin, schemaSingup } from "./auth.validatiion.js";
const router = Router();

router.post('/signup',validation(schemaSingup),asyncHandler(authController.signup))
router.post('/signin',validation(schemaSingin),asyncHandler(authController.signin))
router.put('/confirmEmail/:token',asyncHandler(authController.confirmEmail))
export default router;
