import { isEmpty } from 'lodash';

const parse = JSON.parse;
const stringify = JSON.stringify;

/**
 * Returns data from storage
 * @param  {String} key Item to get from the storage
 * @return {String|Object}     Data from the storage
 */
export const get = (key) => {
  if (localStorage && localStorage.getItem(key)) {
    const val = localStorage.getItem(key);
    if (val === null) {
      return null;
    }
    return parse(val);
  }

  if (sessionStorage && sessionStorage.getItem(key)) {
    const val = localStorage.getItem(key);
    if (val === null) {
      return null;
    }
    return parse(val);
  }

  return null;
};

/**
 * Set data in storage
 * @param {String|Object}  value    The data to store
 * @param {String}  key
 * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
 */
export const set = (value, key, isLocalStorage) => {
  if (isEmpty(value)) {
    return null;
  }

  if (isLocalStorage && localStorage) {
    return localStorage.setItem(key, stringify(value));
  }

  if (sessionStorage) {
    return sessionStorage.setItem(key, stringify(value));
  }

  return null;
};

/**
 * Remove an item from the used storage
 * @param  {String} key [description]
 */
export const clear = (key) => {
  if (localStorage && localStorage.getItem(key)) {
    return localStorage.removeItem(key);
  }

  if (sessionStorage && sessionStorage.getItem(key)) {
    return sessionStorage.removeItem(key);
  }

  return null;
};

/**
 * Clear all app storage
 */
export const clearAppStorage = () => {
  if (localStorage) {
    localStorage.clear();
  }

  if (sessionStorage) {
    sessionStorage.clear();
  }
};
