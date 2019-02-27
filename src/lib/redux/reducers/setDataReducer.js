import {REMOVE_DATA, SET_DATA} from "../../constants/actionConstants";
import {SET_DATA_KEY_DELIMITER} from "../../constants/keys";

export const setDataReducer = (state = {}, action) => {
  let lastKey;

  if (action.type === SET_DATA || action.type === REMOVE_DATA) {
    const key = action.payload.key;
    const keys = key.split(SET_DATA_KEY_DELIMITER);

    const obj = JSON.parse(JSON.stringify(state)); // deep copy
    lastKey = keys[keys.length - 1];
    let next = obj;
    for (const currKey of keys) {
      if (currKey === lastKey) {
        next[currKey] =
          action.type === SET_DATA ? action.payload.value : undefined;
      } else {
        next = next.hasOwnProperty(currKey)
          ? next[currKey]
          : (next[currKey] = {});
      }
    }
    return obj;
  } else {
    return state;
  }
};
