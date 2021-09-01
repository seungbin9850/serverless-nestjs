import { v4 as uuid } from 'uuid';

export const makeId = async (): Promise<string> => {
  const id = await uuid().split('-');
  return id[2] + id[1] + id[0] + id[3] + id[4];
};
