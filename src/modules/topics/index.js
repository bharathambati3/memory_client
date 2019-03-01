import React, {Component} from "react";
import {ROUTE_TOPICS_CREATE, ROUTE_TOPICS_LIST} from "../../lib/constants/RouteConstants";

import RouteComponentMapper from "../router/routeComponentMapper";
import CreateTopic from "./ui/create/CreateTopic";
import ListTopics from "./ui/list/ListTopics";


const routes = [
    {
        component: CreateTopic,
        exact: true,
        path: ROUTE_TOPICS_CREATE
    },
    {
        component: ListTopics,
        exact: false,
        path: ROUTE_TOPICS_LIST
    }
]

class TopicsUI extends Component {
    render() {
        return (
            <RouteComponentMapper routes={routes}/>
        );
    }
}

export default TopicsUI;
