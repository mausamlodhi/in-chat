import Joi from "joi";
const signupSchema = Joi.object({
  firstName: Joi.string().min(3).max(50).required().messages({
    "string.empty": "First name is required",
    "any.required": "First name is required",
    "string.min": "First name must be greater than 2 characters",
    "string.max": "First name must be less than 50 characters",
  }),
  lastName: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Last name is required",
    "any.required": "Last name is required",
    "string.min": "Last name must be greater than 2 characters",
    "string.max": "Last name must be less than 50 characters",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .min(6)
    .max(50)
    .messages({
      "any.required": "EMAIL_REQUIRED",
      "string.empty": "EMAIL_REQUIRED",
      "string.email": "VALID_EMAIL_ALLOWED",
      "string.min": "EMAIL_MIN_VALIDATION",
      "string.max": "EMAIL_MAX_VALIDATION",
    })
    .required(),
  password: Joi.string()
    .min(6)
    .max(12)
    .regex(
      /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,}).*$/
    )
    .messages({
      "string.pattern.base": "PASSWORD_VALIDATION",
      "string.min": "PASSWORD_MIN_VALIDATION",
      "string.max": "PASSWORD_MAX_VALIDATION",
      "string.empty": "PASSWORD_REQUIRED",
      "any.required": "PASSWORD_REQUIRED",
    })
    .required(),
  phoneNumber: Joi.string().empty().min(10).max(10).required(),
  profileImage : Joi.string().allow("").optional(),
  refreshToken : Joi.string().allow("").optional(),
  fcmToken : Joi.string().allow("").optional(),
  isVarified : Joi.boolean().required(),
});

export default {
    signupSchema,

}