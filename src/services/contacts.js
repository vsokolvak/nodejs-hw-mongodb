import { ContactsCollection } from "../db/models/contacts.js";


export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
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

export const updateContacts = async (studentId, payload, options = {}) => {

  const updateContact = await ContactsCollection.findOneAndUpdate(
    { _id: studentId },
    payload,
    {
      ...options,
    }
  );

  if (!updateContact || !updateContact.value) return null;

  return updateContact;
};