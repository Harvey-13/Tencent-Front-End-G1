import { getRequest } from '@/api/request';

export const getSingerApi = async (type: number = 1) => {
  return await getRequest('/toplist/artist', { type });
};
