import axios from 'axios';
import { get } from './get';
import { post } from './post';

/* eslint-disable */
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  });

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },);
/* eslint-enable */

export {
  get,
  post,
};
