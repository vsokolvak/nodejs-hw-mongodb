
const parseNumber = (reqNumber, defaultValue) => {
  const isString = typeof reqNumber === 'string';
  if (!isString) return defaultValue;

  const parsedNumber = parseInt(reqNumber);
  if (Number.isNaN(parsedNumber)) {
    return defaultValue;
  }

  return reqNumber;
};

export const parsePaginationParams = query => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};

parsePaginationParams({page:'2', perPage:'3'});