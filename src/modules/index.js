import React, {Component} from "react";
import TopBar from "./topBar";
import BottomBar from "./bottomBar/ui/BottomBar";
import RouteComponentMapper from "./router/routeComponentMapper";
import Topics from "./topics";
import {ROUTE_CATEGORIES, ROUTE_MEMORY, ROUTE_TOPICS} from "../lib/constants/RouteConstants";
import CategoryUI from "./category/index";
import MemoryUI from "./memory/index";

const routes = [
    {
        component: Topics,
        exact: false,
        path: ROUTE_TOPICS
    },
    {
        component: CategoryUI,
        exact: false,
        path: ROUTE_CATEGORIES
    },
    {
        component: MemoryUI,
        exact: false,
        path: ROUTE_MEMORY
    }
]

class UI extends Component {
    render() {
        return (
            <div>
               <TopBar/>
               <RouteComponentMapper routes={routes}/>
               <BottomBar/>
            </div>
        );
    }
}

export default UI;
