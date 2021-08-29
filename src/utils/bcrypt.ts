import { hashSync, compareSync } from 'bcrypt-nodejs';

export const hash = (text: string): string => {
  return hashSync(text);
};

export const compare = (text: string, digest: string): boolean => {
  return compareSync(text, digest);
};
