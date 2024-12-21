import { Router } from "express";
import controllers from "../controller";
import validations from "../validation";
import middlewares from "../middlewares";
const router = Router();
const { mediaValidator } = validations;
const { validateMiddleware } = middlewares;
const { mediaController } = controllers;

router.post(
    '/media/upload/:mediaFor/:mediaType', (request, response, next) => {
        Object.assign(request.params, { apiName: 'media' });
        next();
    }, (request, response, next) => {
        const { params } = request;
        Object.assign(request.body, params);
        next();
    },
    validateMiddleware({
        schema: mediaValidator.uploadSchema
    }),
    mediaController.uploadMedia
)
export default router;