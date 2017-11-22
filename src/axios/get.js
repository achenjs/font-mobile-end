import axios from 'axios';

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
