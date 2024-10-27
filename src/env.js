import dotenv from 'dotenv';

dotenv.config();

export const env = (propertyName) => {
  if (process.env[propertyName]) return process.env[propertyName];
  else throw new Error(`not found ${propertyName} in env`);
};
