import React, {Component} from 'react';
import TopBar from "./topBar";
import BottomBar from "./bottomBar/BottomBar";

class UI extends Component {
    render() {
        return (
            <div>
               <TopBar/>
               <BottomBar/>
            </div>
        );
    }
}

export default UI;
