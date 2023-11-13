import Joi from 'joi';

class UserAuthValidators {
  public registerSchema() {
    return Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .min(8)
        .regex(/[A-Z]/, 'one uppercase letter')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'one special character')
        .required(),
      username: Joi.string().min(3).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    });
  }

  public loginSchema() {
    return Joi.object({
      password: Joi.string().required(),
      email: Joi.string().email(),
      username: Joi.string(),
    })
      .or('email', 'username')
      .xor('email', 'username')
      .messages({
        'object.missing': 'Необходимо указать либо email, либо username',
        'object.xor': 'Необходимо указать только email или username, но не оба',
      });
  }
  public refrashSchema() {
    return Joi.object({
      refreshToken: Joi.string().required(),
    });
  }
}

export default UserAuthValidators;
