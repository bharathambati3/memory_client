import {NOTIFY, REMOVE_NOTIFICATION} from "../../constants/actionConstants";

export const notify = (msg) => ({
    type: NOTIFY,
    payload: {
        id: (new Date).getTime(),
        message: msg
    },
})

export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id
})
