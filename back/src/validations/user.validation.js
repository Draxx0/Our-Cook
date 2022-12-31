const Joi = require("joi");

const registerValidation = (data) => {
  const joiUserSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    profilePicture: Joi.string().default(null),
  });
 
  return joiUserSchema.validate(data);
};

const loginValidation = (data) => {
 const joiUserSchema = Joi.object({
   email: Joi.string().email().required(),
   password: Joi.string().min(6).required(),
 });

 return joiUserSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
