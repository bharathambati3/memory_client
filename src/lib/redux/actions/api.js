// action types
import {notify} from "./notifications";
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

// action creators
export const apiRequest = (props) => {

  const body = props.body;
  const method = props.method ? props.method : 'GET';
  const url = props.url;
  const success = props.success;
  const error = props.error;
  const feature = props.feature;
  return {
      type: `${feature} ${API_REQUEST}`,
      payload: {method, url, feature, body, success, error},
  }
};

export const apiSuccess = ({response, feature}) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: {feature}
});

export const simpleError = (e) => (notify(e, 'error'));