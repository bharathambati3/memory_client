import React, {Component} from "react";
import {ROUTE_MEMORY_CREATE, ROUTE_MEMORY_LIST} from "../../lib/constants/RouteConstants";
import ListMemory from "./ui/listing/ListMemory";
import CreateMemory from "./ui/CreateMemory";
import RouteComponentMapper from "../router/routeComponentMapper";

const routes = [
    {
        component: CreateMemory,
        exact: true,
        path: ROUTE_MEMORY_CREATE
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
