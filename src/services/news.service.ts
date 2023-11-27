import { axios } from '@/lib/axios';
import { Article, NewsResponse } from '@/types/news.type';

export const fetchTopNews = async (country: string): Promise<Article[]> => {
  const data = axios
    .get<NewsResponse>('/top-headlines?country=' + country)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      throw error;
    });
  return data;
};

export const fetchNewsByCategory = async (country: string, category: string, limit?: number): Promise<Article[]> => {
  const data = axios
    .get<NewsResponse>(`/top-headlines?country=${country}&category=${category}&pageSize=${limit}`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      throw error;
    });
  return data;
};

export const fetchBySearchTerm = async (country: string, search: string): Promise<Article[]> => {
  const data = axios
    .get<NewsResponse>('/top-headlines?country=' + country + '&q=' + search)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      throw error;
    });
  return data;
};
