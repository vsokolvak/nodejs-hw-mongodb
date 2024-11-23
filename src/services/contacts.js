import { SORT_ORDER } from "../constants/index.js";
import { ContactsCollection } from "../db/models/contacts.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";


export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  type,
  isFavourite,
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();

  if (type) {
    contactsQuery.where('contactType').equals(type);
  }
  if (typeof isFavourite === 'boolean') {
    contactsQuery.where('isFavourite').equals(isFavourite);
  }

  const contactsCount = await ContactsCollection.find({ userId })
    .merge(contactsQuery)
    .countDocuments();
    
  const contacts = await contactsQuery
    .find({ userId })
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

export const getContactsById = async (contactId, userId) => {
  const contact = await ContactsCollection.findOne({ _id:contactId, userId });
  return contact;
};

export const createContacts = async (payloadData) => {
  const contact = await ContactsCollection.create(payloadData);
  return contact;
};

export const deleteContacts = async (contactId, userId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });
  return contact;
};

export const updateContacts = async (contactId, userId, payload, options = {new:true}) => {
  const updateContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      ...options,
    }
  );

  return updateContact;
};