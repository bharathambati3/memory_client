import {SET_DATA_KEY_DELIMITER} from "../constants/keys";

export const extractor = (data, key) => {
    const arr = key.split(SET_DATA_KEY_DELIMITER);

    let resp = data['content'];
    for(const key of arr) {
        resp = resp[key];
    }
    return resp;
};