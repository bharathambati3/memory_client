import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {
    ADD_TOPIC,
    DELETE_TOPIC,
    HTTP_DELETE,
    HTTP_POST,
    LIST_REVISION_TYPES,
    LIST_TOPICS
} from "../../../../lib/constants/NetworkConstants";
import {
    ADD_TOPIC_ACTION,
    DELETE_TOPIC_ACTION,
    LIST_REVISION_TYPES_ACTION,
    LIST_TOPICS_ACTION
} from "../../../../lib/constants/actionIds";
import {notify} from "../../../../lib/redux/actions/notifications";
import {setData} from "../../../../lib/redux/actions/manageData";
import {KEY_LIST_REVISION_TYPES, KEY_LIST_TOPICS} from "../../../../lib/constants/keys";

const convert = (req) => {
    const obj = {
        name: req.formContent.name.value,
        description: req.formContent.description.value,
        categoryId: req.formContent.category.value
    }

    return JSON.stringify(obj);
}

export const deleteTopicsApi = (id) => apiRequest({
    url: `${DELETE_TOPIC}/${id}`,
    method: HTTP_DELETE,
    feature: DELETE_TOPIC_ACTION,
    error: simpleError,
    success: (resp) => [
        notify('Successfully deleted', 'success'),
        listTopicsApi()
    ]
})


export const listTopicsApi = () => apiRequest({
    url: LIST_TOPICS,
    feature: LIST_TOPICS_ACTION,
    error: simpleError,
    success: (resp) => setData({
        key: KEY_LIST_TOPICS,
        value: resp.data
    })
});

export const listRevisionTypesApi = () => apiRequest({
    url: LIST_REVISION_TYPES,
    feature: LIST_REVISION_TYPES_ACTION,
    error: simpleError,
    success: (resp) => setData({
        key: KEY_LIST_REVISION_TYPES,
        value: resp.data
    })
});

export const createTopicApi = (formState) => apiRequest({
    body: convert(formState),
    method: HTTP_POST,
    url: ADD_TOPIC,
    feature: ADD_TOPIC_ACTION,
    error: simpleError,
    success: (resp) => {
        formState.onReset();
        return notify(`Successfully added new topic: ${resp.data.id}`, 'success')
    }
})