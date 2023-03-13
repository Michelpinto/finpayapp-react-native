import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://finpayapp.herokuapp.com/',
});
