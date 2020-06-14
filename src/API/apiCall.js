import axios from 'axios';
import {REQUEST_URL} from './urlSettings.js';

export const getCall = (urlParams) => {
  return axios.get(`${REQUEST_URL}/${urlParams}`);
};
export const postCall = (urlParams, params) => {
  return axios.post(`${REQUEST_URL}/${urlParams}`, params);
};
export const putCall = (urlParams, params) => {
  return axios.put(`${REQUEST_URL}/${urlParams}`,params);
};
export const deleteCall = (urlParams, params) => {
  return axios.delete(`${REQUEST_URL}/${urlParams}`, params);
};