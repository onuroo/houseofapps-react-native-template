// Api.js
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'http://yourdomain/api',
});

const apiRequest = (method, url, request) => {
  const headers = {};

  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

// function to execute the http get request
const getRequest = (url, request) => apiRequest('get', url, request);

// function to execute the http delete request
const deleteRequest = (url, locale, request) => apiRequest('delete', url, request);

// function to execute the http post request
const postRequest = (url, locale, request) => apiRequest('post', url, request);

// function to execute the http put request
const putRequest = (url, locale, request) => apiRequest('put', url, request);

// function to execute the http path request
const patchRequest = (url, locale, request) => apiRequest('patch', url, request);

// expose your method to other services or actions
const API = {
  getRequest,
  deleteRequest,
  postRequest,
  putRequest,
  patchRequest,
};
export default API;
