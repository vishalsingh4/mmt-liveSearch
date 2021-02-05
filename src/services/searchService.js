import { axiosInstance } from './axiosConfig';

const getSearchList = (searchQuery = 'india') => {
  return axiosInstance.get(`?limit=15&search_query=${searchQuery}&v=2`);
};

export { 
    getSearchList, 
};
