import { Router } from "express";
import { createNewContactsController, deleteContactsByIdController, getAllContactsController, getContactsByIdController, puthContactsByIdController } from "../controllers/contacts.js";
import { cntrlWrapper } from "../utils/cntrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactsShema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";


const contactsRouter = Router();

  // response controllers

  contactsRouter.get('/contacts', cntrlWrapper(getAllContactsController));

  contactsRouter.get('/contacts/:contactId', isValidId, cntrlWrapper(getContactsByIdController));

  contactsRouter.post(
    '/contacts',
    validateBody(createContactsShema),
    cntrlWrapper(createNewContactsController)
  );

  contactsRouter.delete(
    '/contacts/:contactId',
    isValidId,
    cntrlWrapper(deleteContactsByIdController)
  );

  contactsRouter.patch(
    '/contacts/:contactId',
    isValidId,
    validateBody(createContactsShema),
    cntrlWrapper(puthContactsByIdController)
  );


export default contactsRouter;