import { createContacts, deleteContacts, getAllContacts, getContactsById, updateContacts } from "../services/contacts.js";
import createHttpError from 'http-errors';


export const getAllContactsController = async (req, res) => {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
};

export const getContactsByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactsById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contact}!`,
    data: contact,
  });
};

export const createNewContactsController = async (req, res) => {
  const contact = await createContacts(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });

};

export const deleteContactsByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await deleteContacts(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(204).send();

};

export const puthContactsByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await updateContacts(contactId, req.body);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: contact,
  });
};