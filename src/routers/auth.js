import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { loginUserValidationSchema, requestResetEmailSchema, resetPasswordSchema, userValidationShema } from "../validation/auth.js";
import { cntrlWrapper } from "../utils/cntrlWrapper.js";
import { loginUserController, logoutUserController, refreshUserSessionController, registerUserController, requestResetEmailController, resetPasswordController } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userValidationShema),
  cntrlWrapper(registerUserController)
);

authRouter.post(
  '/login',
  validateBody(loginUserValidationSchema),
  cntrlWrapper(loginUserController)
);

authRouter.post('/logout', cntrlWrapper(logoutUserController));

authRouter.post('/refresh', cntrlWrapper(refreshUserSessionController));

authRouter.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  cntrlWrapper(requestResetEmailController)
);

authRouter.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  cntrlWrapper(resetPasswordController)
);

export default authRouter;