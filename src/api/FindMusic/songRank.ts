import { getRequest } from '@/api/request';

export const getRankInfoApi = async () => {
  return await getRequest('/toplist/detail');
};

export const getRankTrackApi = async (id: number, limit = 5) => {
  return await getRequest('/playlist/track/all', { id, limit });
};
