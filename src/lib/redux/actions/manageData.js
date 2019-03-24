import {REMOVE_DATA, SET_DATA} from "../../constants/actionConstants";

export const setData = (data) => ({
    type: SET_DATA,
    payload: {...data, feature: data.key}
});

export const removeData = (data) => ({
    type: REMOVE_DATA,
    payload: data
});