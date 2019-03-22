import React, {Component} from "react";
import {
    ROUTE_MEMORY_CREATE, ROUTE_MEMORY_LIST, ROUTE_MEMORY_REMEMBER_LIST,
    ROUTE_MEMORY_VIEW
} from "../../lib/constants/RouteConstants";
import ListMemory from "./ui/listing/ListMemory";
import CreateMemory from "./ui/CreateMemory";
import RouteComponentMapper from "../router/routeComponentMapper";
import ViewMemory from "./ui/ViewMemory";
import ListRememberMemory from "./ui/listing/ListRememberMemory";

const routes = [
    {
        component: CreateMemory,
        exact: true,
        path: ROUTE_MEMORY_CREATE
    },
    {
        component: ViewMemory,
        exact: true,
        path: ROUTE_MEMORY_VIEW
    },
    {
        component: ListRememberMemory,
        exact: false,
        path: ROUTE_MEMORY_REMEMBER_LIST
    },
    {
        component: ListMemory,
        exact: false,
        path: ROUTE_MEMORY_LIST
    }
]

class UI extends Component {
    render() {
        return (<RouteComponentMapper routes={routes}/>);
    }
}

export default UI;
