import {REMOVE_DATA, SET_DATA} from "../../constants/actionConstants";

export const setData = (data) => {
    const retObj = {
        type: SET_DATA,
        payload: {
            data: []
        }
    };
    if (Array.isArray(data)) {
        for (const datum of data) {
            retObj.payload.data.push({...datum});
            retObj.payload.feature = (! retObj.payload.feature) ? datum.key : retObj.payload.feature +" && "+ datum.key;
        }
    } else {
        retObj.payload.data.push({...data})
        retObj.payload.feature = data.key;
    }
    return retObj;
};

export const removeData = (data) => ({
    type: REMOVE_DATA,
    payload: data
});