import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { userValidationShema } from "../validation/auth.js";
import { cntrlWrapper } from "../utils/cntrlWrapper.js";
import { registerUserController } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post(
  '/',
  validateBody(userValidationShema),
  cntrlWrapper(registerUserController)
);

export default authRouter;