import { axios } from '@/lib/axios';
import { TopNewsResponse } from '@/types/top-news.type';

export const fetchTopNews = async (country: string): Promise<TopNewsResponse> => {
  const data = axios
    .get<TopNewsResponse>('/top-headlines?country=' + country)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
  return data;
};
