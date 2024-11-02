import { Router } from "express";
import { createNewContactsController, deleteContactsByIdController, getAllContactsController, getContactsByIdController, puthContactsByIdController } from "../controllers/contacts.js";
import { cntrlWrapper } from "../utils/cntrlWrapper.js";


const contactsRouter = Router();

  // response controllers

  contactsRouter.get('/contacts', cntrlWrapper(getAllContactsController));

  contactsRouter.get('/contacts/:contactId', cntrlWrapper(getContactsByIdController));

  contactsRouter.post('/contacts', cntrlWrapper(createNewContactsController));

  contactsRouter.delete(
    '/contacts/:contactId',
    cntrlWrapper(deleteContactsByIdController)
  );

  contactsRouter.patch('/contacts/:contactId', cntrlWrapper(puthContactsByIdController));


export default contactsRouter;