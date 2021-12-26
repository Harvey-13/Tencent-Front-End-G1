import { getRequest } from '@/api/request';

const MV_LIMIT = 8;

export const getNewMvApi = async (limit = MV_LIMIT) => {
  return getRequest('/mv/first', { limit });
};

export const getNetEaseMvApi = async (limit = MV_LIMIT) => {
  return getRequest('/mv/exclusive/rcmd', { limit });
};

export const getRecommendMvApi = async (limit = MV_LIMIT) => {
  return getRequest('/personalized/mv', { limit });
};

export const getRankMvApi = async (limit = 10) => {
  return getRequest('/top/mv', { limit });
};
