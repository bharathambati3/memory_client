import {apiRequest, simpleError} from "../../../../../lib/redux/actions/api";
import {ADD_TOPIC, HTTP_POST} from "../../../../../lib/constants/NetworkConstants";
import {ADD_TOPIC_ACTION} from "../../../../../lib/constants/actionIds";
import {notify} from "../../../../../lib/redux/actions/notifications";

const convert = (req) => {
    const obj = {
        name: req.formContent.name.value,
        description: req.formContent.description.value
    }

    return JSON.stringify(obj);
}
export const createTopic = (formState) => apiRequest({
    body: convert(formState),
    method: HTTP_POST,
    url: ADD_TOPIC,
    feature: ADD_TOPIC_ACTION,
    error: simpleError,
    success: (resp) => {
        formState.onReset();
        return notify(`Successfully added ${JSON.stringify(resp)}`, 'success')
    }
})