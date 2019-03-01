import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {ADD_CATEGORY_ACTION, DELETE_CATEGORY_ACTION, LIST_CATEGORY_ACTION} from "../../../../lib/constants/actionIds";
import {
    ADD_CATEGORY, DELETE_CATEGORY, HTTP_DELETE, HTTP_POST,
    LIST_CATEGORY
} from "../../../../lib/constants/NetworkConstants";
import {KEY_LIST_CATEGORIES} from "../../../../lib/constants/keys";
import {setData} from "../../../../lib/redux/actions/manageData";
import {notify} from "../../../../lib/redux/actions/notifications";


const convert = (req) => {
    const obj = {
        name: req.formContent.name.value,
        description: req.formContent.description.value
    }
    return JSON.stringify(obj);
}

export const addCategoryApi = (formState) => {
    return apiRequest({
        body: convert(formState),
        method: HTTP_POST,
        url: ADD_CATEGORY,
        feature: ADD_CATEGORY_ACTION,
        error: simpleError,
        success: (resp) => {
            formState.onReset();
            return notify(`Successfully added ${JSON.stringify(resp)}`, 'success')
        }
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

export const deleteCategoryApi = (id) => {
    return apiRequest({
        url: `${DELETE_CATEGORY}/${id}`,
        method: HTTP_DELETE,
        feature: DELETE_CATEGORY_ACTION,
        error: simpleError,
        success: (resp) => [
            notify('Successfully deleted', 'success'),
            listCategoryApi()
        ]
    })
}