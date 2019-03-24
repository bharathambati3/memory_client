import React, {Component} from "react";
import CategoryFeature from "./feature/CategoryFeature";
import {ROUTE_CATEGORIES_CREATE, ROUTE_CATEGORIES_LIST} from "../../lib/constants/RouteConstants";
import CreateCategory from "./ui/create/CreateCategory";
import RouteComponentMapper from "../router/routeComponentMapper";
import ListCategory from "./ui/list/ListCategory";

const routes = [
    {
        component: CreateCategory,
        exact: true,
        path: ROUTE_CATEGORIES_CREATE
    },
    {
        component: ListCategory,
        exact: false,
        path: ROUTE_CATEGORIES_LIST
    }
]
class CategoryUI extends Component {
    render() {
        return (
            <CategoryFeature>
                {
                    (props) => {
                        return <RouteComponentMapper compProps={props} routes={routes}/>
                    }
                }
            </CategoryFeature>
        );
    }
}

export default CategoryUI;
