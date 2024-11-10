import { SORT_ORDER } from "../constants/index.js";
import { ContactsCollection } from "../db/models/contacts.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";


export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  type,
  isFavorite,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();
  if (type) {
    contactsQuery.where('type').equals(type);
  }
  if (typeof isFavorite === 'boolean') {
    contactsQuery.where('isFavorite').equals(type);
  }

  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();
  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactsById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContacts = async (payloadData) => {
  const contact = await ContactsCollection.create(payloadData);
  return contact;
};

export const deleteContacts = async (contactId) => {
  const contact = await ContactsCollection.findByIdAndDelete({_id:contactId});
  return contact;
};

export const updateContacts = async (contactId, payload, options = {}) => {
  const updateContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      ...options,
    }
  );

  return updateContact;
};