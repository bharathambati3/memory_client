// action types
import {notify} from "./notifications";
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

// action creators
export const apiRequest = ({body, method, url, feature, ...rest}) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: {method, url, feature, body, ...rest},
});

export const apiSuccess = ({response, feature}) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: {feature}
});

export const simpleError = (e) => (notify(e));