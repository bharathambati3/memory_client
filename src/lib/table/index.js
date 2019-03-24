import React from "react";
import TableFactory from "./factory/TableFactory";
import {getIcon} from "../icons/factory";
import IconButton from "@material-ui/core/IconButton";


const singleAction = (datum) => {
    const {icon, cb} = datum;
    return <IconButton onClick={cb}> {getIcon(icon)} </IconButton>
}

export const createTableActions = (data) => {
    if (! data) {
        return;
    }
    if (Array.isArray(data)) {
        return data.map(singleAction);
    }
    return [singleAction(data)]
}

export const createTable =
    (meta, data) => <TableFactory meta={meta} data={data}/>;