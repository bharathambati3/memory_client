import {apiRequest, simpleError} from "../../../../lib/redux/actions/api";
import {
    ADD_MEMORY,
    GET_MEMORY,
    HTTP_GET,
    HTTP_POST,
    LIST_MEMORIES,
    LIST_MEMORY_REVISED,
    LIST_REMEMBER_MEMORIES
} from "../../../../lib/constants/NetworkConstants";
import {
    ADD_MEMORY_ACTION,
    GET_MEMORY_ACTION,
    LIST_MEMORY_ACTION,
    LIST_MEMORY_REVISED_ACTION,
    LIST_REMEMBER_MEMORY_ACTION
} from "../../../../lib/constants/actionIds";
import {notify} from "../../../../lib/redux/actions/notifications";
import {setData} from "../../../../lib/redux/actions/manageData";
import {
    KEY_CURRENT_EDIT_MEMORY, KEY_CURRENT_EDIT_MEMORY_ID,
    KEY_HEADER,
    KEY_LIST_MEMORIES,
    KEY_LIST_REMEMBER_MEMORIES,
    KEY_SELECTED_MEMORIES
} from "../../../../lib/constants/keys";
import {routeAction} from "../../../../lib/redux/actions/historyAction";
import {ROUTE_MEMORY_EDIT, ROUTE_MEMORY_REMEMBER_LIST} from "../../../../lib/constants/RouteConstants";


const convert = (req) => {
    const obj = {
        topicId: req.formContent.topic.value,
        title: req.formContent.title.value,
        content: JSON.stringify(req.formContent.content.value),
        revisionTypeId: req.formContent.revisionType.value
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

export const editMemoryApi = (formState) => apiRequest({
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

export const listRememberMemoryApi = () => apiRequest({
    method: HTTP_GET,
    url: LIST_REMEMBER_MEMORIES,
    feature: LIST_REMEMBER_MEMORY_ACTION,
    error: simpleError,
    success: (resp) => setData({
        key: KEY_LIST_REMEMBER_MEMORIES,
        value: resp.data
    })
})

export const memoryRevised = ({id}) => apiRequest({
    method: HTTP_POST,
    body: JSON.stringify({
        memoryId: id,
        comments: ""
    }),
    url: LIST_MEMORY_REVISED,
    feature: LIST_MEMORY_REVISED_ACTION,
    error: simpleError,
    success: (resp) => routeAction({
        url: ROUTE_MEMORY_REMEMBER_LIST
    })
})

export const getMemory = (id) => apiRequest({
    method: HTTP_GET,
    url: `${GET_MEMORY}${id}`,
    feature: GET_MEMORY_ACTION,
    error: simpleError,
    success: (resp) => [
        setData([
            {
                key: KEY_SELECTED_MEMORIES,
                value: resp.data
            },{
                key: KEY_HEADER,
                value: `${resp.data.topic.name} - ${resp.data.title}`
            }
        ])
    ]
})

export const initializeEditMemory = (id) => apiRequest({
    method: HTTP_GET,
    url: `${GET_MEMORY}${id}`,
    feature: GET_MEMORY_ACTION,
    error: simpleError,
    success: (resp) => [
        setData([
            {
                key: KEY_CURRENT_EDIT_MEMORY_ID,
                value: id
            },
            {
                key: KEY_CURRENT_EDIT_MEMORY,
                value: resp.data.content
            },{
                key: KEY_HEADER,
                value: `Edit ${resp.data.topic.name} - ${resp.data.title}`
            }
        ]),
    ]
})

export const onMemoryEdit = (id) => {
    let idPlaceholder = /\/:id\//g;
    const url = ROUTE_MEMORY_EDIT.replace(idPlaceholder, `/${id}/`);
    return routeAction({
        url
    })
}

