import { getRequest } from '@/api/request';

export const getSingerDetailApi = async (id: number) => {
  return await getRequest('/artists', { id });
};
