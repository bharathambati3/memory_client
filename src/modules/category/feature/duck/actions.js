import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {ADD_CATEGORY_ACTION, LIST_CATEGORY_ACTION} from "../../../../lib/constants/actionIds";
import {ADD_CATEGORY, HTTP_POST, LIST_CATEGORY} from "../../../../lib/constants/NetworkConstants";
import {KEY_LIST_CATEGORIES} from "../../../../lib/constants/keys";
import {setData} from "../../../../lib/redux/actions/manageData";


const convert = (req) => {
    return {
        "name": req.formContent.name.value,
        "description": req.formContent.description.value
    }
}

export const addCategoryApi = (req) => {
    return apiRequest({
        body: convert(req),
        method: HTTP_POST,
        url: ADD_CATEGORY,
        feature: ADD_CATEGORY_ACTION,
        error: simpleError,
    })
}

export const listCategoryApi = () => {
    return apiRequest({
        url: LIST_CATEGORY,
        feature: LIST_CATEGORY_ACTION,
        error: simpleError,
        success: (resp) => setData({
            key: KEY_LIST_CATEGORIES,
            value: resp.data
        })
    })
}