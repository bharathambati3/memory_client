import {REMOVE_DATA, SET_DATA} from "../../constants/actionConstants";
import {SET_DATA_KEY_DELIMITER} from "../../constants/keys";

export const setDataReducer = (state = {}, action) => {
  let lastKey;

  if (action.type === SET_DATA) {

    const obj = JSON.parse(JSON.stringify(state)); // deep copy

    const list = action.payload.data;

    for(const item of list) {
        const key = item.key;
        const keys = key.split(SET_DATA_KEY_DELIMITER);


        lastKey = keys[keys.length - 1];
        let next = obj;
        for (const currKey of keys) {
            if (currKey === lastKey) {
                next[currKey] = item.value;
            } else {
                next = next.hasOwnProperty(currKey)
                    ? next[currKey]
                    : (next[currKey] = {});
            }
        }
    }

    return obj;
  } else if (action.type === REMOVE_DATA) {
      const obj = JSON.parse(JSON.stringify(state)); // deep copy

      const list = action.payload.data;

      for(const item of list) {
          const key = item.key;

          const keys = key.split(SET_DATA_KEY_DELIMITER);
          lastKey = keys[keys.length - 1];
          let next = obj;
          for (const currKey of keys) {
              if (currKey === lastKey) {
                  next[currKey] = undefined;
              } else {
                  next = next.hasOwnProperty(currKey)
                      ? next[currKey]
                      : (next[currKey] = {});
              }
          }
      }
      return obj;
  }else {
    return state;
  }
};
