import React, {Component} from "react";
import TopBarFeature from "./feature/TopBarFeature";
import TopBar from "./ui/TopBar";


class TopBarUI extends Component {
    render() {
        return (
            <TopBarFeature>
                {
                    (props) => {
                        return (<TopBar {...props}/>);
                    }
                }
            </TopBarFeature>
        );
    }
}

TopBarUI.propTypes = {};

export default TopBarUI;
