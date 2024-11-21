import { createContacts, deleteContacts, getAllContacts, getContactsById, updateContacts } from "../services/contacts.js";
import createHttpError from 'http-errors';
import { parsePaginationParams } from "../utils/paresePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";


export const getAllContactsController = async (req, res) => {

  const {page, perPage} = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const {type, isFavourite} = parseFilterParams(req.query);
  const userId = req.user._id;

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    type,
    isFavourite,
    userId,
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactsByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const userId = req.user._id;

  const contact = await getContactsById(contactId, userId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createNewContactsController = async (req, res) => {

  const userId = req.user._id;
  const contact = await createContacts({...req.body, userId});

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });

};

export const deleteContactsByIdController = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user._id;


  const contact = await deleteContacts(contactId, userId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(204).send();

};

export const puthContactsByIdController = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user._id;

  const contact = await updateContacts(contactId, userId, req.body);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: contact,
  });
};