import axios from 'axios';

const httpClient = (token) => {
  const baseURL = 'http://tradesplanetservice.herokuapp.com/';

  const instance = axios.create({
    baseURL,
  });

  return instance;
};
export default httpClient;
