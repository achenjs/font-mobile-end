import axios from 'axios';

/* eslint-disable */
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
  },
);
/* eslint-enable */

const formatUrl = (data) => {
  let str = '';
  let i;
  for (i in data) {
    if (!data[i]) {
      str += '';
    } else {
      str += `&${i}=${data[i]}`;
    }
  }
  return str.replace('&', '?');
};

export function get(url, data) {
  const URL = data ? url + formatUrl(data) : url;
  const result = axios(URL, {
    credentials: 'include',
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
  });

  return result;
}
