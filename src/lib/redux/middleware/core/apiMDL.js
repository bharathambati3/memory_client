import {API_REQUEST} from "../../actions/api";
import {BASE_URL} from "../../../constants/NetworkConstants";
import {KEY_LOADING} from "../../../constants/keys";
import {setData} from "../../actions/manageData";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {

        const {body, url, method} = action.payload;
        const successAction = action.payload.success;
        const errAction = action.payload.error;

        dispatch(setData({key: KEY_LOADING, value: true, feature: 'api loading started'}));
        fetch(BASE_URL + url, {body, method, headers: new Headers({'content-type': 'application/json'}),})
            .then(response => response.json())
            .then(response => {
                dispatch(setData({key: KEY_LOADING, value: false, feature: 'api loading ended:success'}));
                if (response.status !== 0) {
                    throw response;
                }
                if (successAction) {
                    dispatch(successAction(response))
                }
            })
            .catch(errMsg => {
                dispatch(setData({key: KEY_LOADING, value: false, feature: 'api loading ended:error'}));
                if (errAction) {
                    dispatch(errAction(errMsg.message))
                }
            })
    }
};
