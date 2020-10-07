import axios from 'axios';


const http = axios.create({
  baseURL: 'https://sneakers-city.herokuapp.com/api/v1',
  headers: {
    'access-control-allow-origin': '*',
    'content-Type': 'application/json',
  },
});

http.interceptors.request.use((request) => {
  return request;
});

export default http;

