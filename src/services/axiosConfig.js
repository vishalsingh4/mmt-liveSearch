import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://voyager.goibibo.com/api/v2/flights_search/find_node_by_name_v2/`,
    timeout: 2000,
});

export {
    axiosInstance,
};