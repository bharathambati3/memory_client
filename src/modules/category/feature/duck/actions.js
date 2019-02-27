import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {ADD_CATEGORY_ACTION} from "../../../../lib/constants/actionIds";
import {ADD_CATEGORY, HTTP_POST} from "../../../../lib/constants/NetworkConstants";


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