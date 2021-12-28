import { getRequest } from '@/api/request';

export const phoneLoginApi = async (phone: string, password: string) => {
  return await getRequest('/login/cellphone', { phone, password });
};
