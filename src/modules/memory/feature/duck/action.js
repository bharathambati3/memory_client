import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {ADD_MEMORY, GET_MEMORY, HTTP_GET, HTTP_POST, LIST_MEMORIES} from "../../../../lib/constants/NetworkConstants";
import {ADD_MEMORY_ACTION, GET_MEMORY_ACTION, LIST_MEMORY_ACTION} from "../../../../lib/constants/actionIds";
import {notify} from "../../../../lib/redux/actions/notifications";
import {setData} from "../../../../lib/redux/actions/manageData";
import {KEY_HEADER, KEY_LIST_MEMORIES, KEY_SELECTED_MEMORIES} from "../../../../lib/constants/keys";


const convert = (req) => {
    const obj = {
        topicId: req.formContent.topic.value,
        title: req.formContent.title.value,
        content: JSON.stringify(req.formContent.content.value)
    }

    const stringResp = JSON.stringify(obj);
    console.log(stringResp);
    return stringResp;
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

export const listMemoryApi = () => apiRequest({
    method: HTTP_GET,
    url: LIST_MEMORIES,
    feature: LIST_MEMORY_ACTION,
    error: simpleError,
    success: (resp) => setData({
        key: KEY_LIST_MEMORIES,
        value: resp.data
    })
})

export const getMemory = (id) => apiRequest({
    method: HTTP_GET,
    url: `${GET_MEMORY}${id}`,
    feature: GET_MEMORY_ACTION,
    error: simpleError,
    success: (resp) => [
        setData({
            key: KEY_SELECTED_MEMORIES,
            value: resp.data
        }),
        setData({
            key: KEY_HEADER,
            value: `${resp.data.topic.name} - ${resp.data.title}`
        })
    ]
})