import createHttpError from "http-errors";



export const validateBody = (shema) => async (req, res, next) => {
  try {
    await shema.validateAsync(req.body, {abortEarly: false});
    next();
  } catch (error) {
    const myError = createHttpError(400, 'Bad Request', {errors: error.details});
    next(myError);
  }
};