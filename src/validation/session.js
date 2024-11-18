import Joi from "joi";

export const usersShema = Joi.object({
  userId: Joi.string().required(),
  accessToken: Joi.string().required(),
  refreshToken: Joi.string().required(),
  accessTokenValidUntil: Joi.date().required(),
  refreshTokenValidUntil: Joi.date().required(),
});

