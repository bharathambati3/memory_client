import {NOTIFY, REMOVE_NOTIFICATION} from "../../constants/actionConstants";

export const notify = (msg, type) => ({
    type: NOTIFY,
    payload: {
        id: new Date().getTime(),
        message: msg,
        type
    },
})

export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id
})
