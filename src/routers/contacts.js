import { Router } from "express";
import { createNewContactsController, deleteContactsByIdController, getAllContactsController, getContactsByIdController, puthContactsByIdController } from "../controllers/contacts.js";
import { cntrlWrapper } from "../utils/cntrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactsShema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";


const contactsRouter = Router();

  // response controllers

  contactsRouter.get('/', cntrlWrapper(getAllContactsController));

  contactsRouter.get('/:contactId', isValidId, cntrlWrapper(getContactsByIdController));

  contactsRouter.post(
    '/',
    validateBody(createContactsShema),
    cntrlWrapper(createNewContactsController)
  );

  contactsRouter.delete(
    '/:contactId',
    isValidId,
    cntrlWrapper(deleteContactsByIdController)
  );

  contactsRouter.patch(
    '/:contactId',
    isValidId,
    validateBody(createContactsShema),
    cntrlWrapper(puthContactsByIdController)
  );


export default contactsRouter;