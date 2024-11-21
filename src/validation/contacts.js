import Joi from "joi";
import { contactsType } from "../db/models/contacts.js";

export const createContactsShema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.number().integer().min(10000).max(999999999999).required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid(...contactsType).required()
});

export const updateContactsShema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.number().integer().min(10000).max(999999999999),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid(...contactsType)
});



