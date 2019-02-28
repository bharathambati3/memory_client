import React from 'react';
import {ROUTE_CATEGORIES, ROUTE_MEMORY, ROUTE_TOPICS} from "../../lib/constants/RouteConstants";
import Topics from '../topics';
import { Route, Switch } from 'react-router-dom';
import CategoryUI from "../category";
import MemoryUI from "../memory/index";

const routes = [
    {
        component: <Topics />,
        exact: false,
        path: ROUTE_TOPICS
    },
    {
        component: <CategoryUI />,
        exact: false,
        path: ROUTE_CATEGORIES
    },
    {
        component: <MemoryUI />,
        exact: false,
        path: ROUTE_MEMORY
    }
]

const RouteComponentMapper = () => {
    return (
        <React.Fragment>
            <div>
                <Switch>
                    {routes.map((e, i) => (
                        <Route
                            key={i}
                            exact={e.exact}
                            path={e.path}
                            render={() => (e.component)}
                        />
                    ))}
                </Switch>
            </div>
        </React.Fragment>
    );
};

export default RouteComponentMapper;
