import React, {Component} from 'react';
import TopBar from "./topBar";
import BottomBar from "./bottomBar/BottomBar";
import RouteComponentMapper from "./router/routeComponentMapper";

class UI extends Component {
    render() {
        return (
            <div>
               <TopBar/>
               <RouteComponentMapper/>
               <BottomBar/>
            </div>
        );
    }
}

export default UI;
