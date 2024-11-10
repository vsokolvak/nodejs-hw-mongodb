import { contactsType } from "../db/models/contacts";

const parseType = type => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = type => contactsType.includes(type);

  if (isType(type)) return type;
};

const parseFavorite = favorite => {
  const isSAtring = typeof favorite === 'string';
  if (!isSAtring) return;

  const isFavorite = favorite => ['true', 'false'].includes(favorite);

  if (isFavorite(favorite)) {
    if (favorite === 'true') return true;
    return false;
  }
};

export const parseFilterParams = query => {
  const { type, isFavorite } = query;

  const parsedType = parseType(type);
  const parsedFavorite = parseFavorite(isFavorite);

  return {
    type: parsedType,
    isFavorite: parsedFavorite,
  };
};