import { Router } from "express";
import { createNewContactsController, deleteContactsByIdController, getAllContactsController, getContactsByIdController, puthContactsByIdController } from "../controllers/contacts.js";
import { cntrlWrapper } from "../utils/cntrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactsShema, updateContactsShema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";
import { authenticate } from "../middlewares/authenticate.js";
import { upload } from './../middlewares/multer.js';


const contactsRouter = Router();

contactsRouter.use(authenticate);

  // response controllers

  contactsRouter.get('/', cntrlWrapper(getAllContactsController));

  contactsRouter.get('/:contactId', isValidId, cntrlWrapper(getContactsByIdController));

  contactsRouter.post(
    '/',
    upload.single('photo'),
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
    upload.single('photo'),
    isValidId,
    validateBody(updateContactsShema),
    cntrlWrapper(puthContactsByIdController)
  );


export default contactsRouter;