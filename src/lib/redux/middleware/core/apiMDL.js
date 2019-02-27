import {API_REQUEST} from "../../actions/api";
import {BASE_URL} from "../../../constants/NetworkConstants";
import {KEY_LOADING} from "../../../constants/keys";
import {setData} from "../../actions/manageData";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {

        const {body, url, method, feature, success, error} = action.payload;
        dispatch(setData({key: KEY_LOADING, value: true, feature: 'api loading started'}));
        fetch(BASE_URL + url, {body, method})
            .then(response => response.json())
            .then(response => {
                dispatch(setData({key: KEY_LOADING, value: false, feature: 'api loading ended:success'}));
                if (success) {
                    dispatch(success({response, feature}))
                }
            })
            .catch(errMsg => {
                dispatch(setData({key: KEY_LOADING, value: false, feature: 'api loading ended:error'}));
                if (error) {
                    dispatch(error(errMsg.message))
                }
            })
    }
};
