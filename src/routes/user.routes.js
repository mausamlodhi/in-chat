import { Router } from "express";
import controllers from "../controller";
import middlewares from "../middlewares";
import validations from "../validation";

const { authMiddleware } = middlewares;
const { userValidator } = validations;
const { userController,validateMiddleware } = controllers;
const router = Router();

router.post('/signup',
    validateMiddleware({schema:userValidator.signupSchema}),
    authMiddleware.checkUser,
    userController.userSignup
);

export default router;