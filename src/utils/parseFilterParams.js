import { contactsType } from "../db/models/contacts.js";

const parseType = type => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = type => contactsType.includes(type);

  if (isType(type)) return type;
};

const parseFavorite = favourite => {
  const isSAtring = typeof favourite === 'string';
  if (!isSAtring) return;

  const isFavorite = favourite => ['true', 'false'].includes(favourite);

  if (isFavorite(favourite)) {
    if (favourite === 'true') return true;
    return false;
  }
};

export const parseFilterParams = query => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedFavorite = parseFavorite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedFavorite,
  };
};
