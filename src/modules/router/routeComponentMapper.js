import React from "react";
import {Route, Switch} from "react-router-dom";

const RouteComponentMapper = (props) => {
    const {routes} = props;
    return (
        <React.Fragment>
            <div>
                <Switch>
                    {routes.map((e, i) => (
                        <Route
                            {...props}
                            test="flasdkf"
                            key={i}
                            exact={e.exact}
                            path={e.path}
                            render={() => <e.component {...props.compProps}/>}
                        />
                    ))}
                </Switch>
            </div>
        </React.Fragment>
    );
};

export default RouteComponentMapper;
