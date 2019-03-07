import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {ADD_MEMORY, HTTP_POST} from "../../../../lib/constants/NetworkConstants";
import {ADD_MEMORY_ACTION} from "../../../../lib/constants/actionIds";
import {notify} from "../../../../lib/redux/actions/notifications";


const convert = (req) => {
    const obj = {
        topicId: req.formContent.topic.value,
        title: req.formContent.title.value,
        content: req.formContent.content.value
    }

    return JSON.stringify(obj);
}

export const createMemoryApi = (formState) => apiRequest({
    body: convert(formState),
    method: HTTP_POST,
    url: ADD_MEMORY,
    feature: ADD_MEMORY_ACTION,
    error: simpleError,
    success: (resp) => {
        formState.onReset();
        return notify(`Successfully added ${JSON.stringify(resp)}`, 'success')
    }
})