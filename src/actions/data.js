import fetch from 'isomorphic-fetch';
import eventSchema from './schema';
import { normalize } from 'normalizr';

export const SET_DATA = 'SET_DATA';

export const setData = (data) => {
  return {
    type: SET_DATA,
    data
  };
};

export const getData = (url) => {
  return (dispatch) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => normalize(data, eventSchema))
      .then(data => {
        return dispatch(setData(data.entities));
      });
  };
};
