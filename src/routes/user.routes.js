import { Router } from "express";
import controllers from "../controller";
import middlewares from "../middlewares";
import validations from "../validation";

const { authMiddleware,validateMiddleware } = middlewares;
const { userValidator } = validations;
const { userController } = controllers;
const router = Router();

router.post('/signup',
    validateMiddleware({schema:userValidator.signupSchema}),
    authMiddleware.checkUser,
    userController.userSignup
);
router.get('/users',
    userController.getAllUsers
)

export default router;