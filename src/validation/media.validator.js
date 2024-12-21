import Joi from "joi";
const uploadSchema = Joi.object({
    mediaFor : Joi.string().messages({
        'any.only' : 'MEDIA_IS_REQUIRED'
    }).required(),
    mediaType : Joi.string().valid('image','audio','video','icon','file','media')
    .messages({
        'any.only' : 'MEDIA_TYPE_IS_REQUIRED'
    }).required(),
    apiName : Joi.string().optional().empty().allow(''),
});
export default {
    uploadSchema,
}