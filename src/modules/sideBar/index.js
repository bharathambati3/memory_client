import React, {Component} from 'react';
import SideBarFeature from "./feature/SideBarFeature";
import SideBar from "./ui/SideBar";


class SideBarUI extends Component {
    render() {
        return (
            <SideBarFeature>
                {
                    (props) => {
                        return (<SideBar {...this.props} {...props}/>);
                    }
                }
            </SideBarFeature>
        );
    }
}

SideBarUI.propTypes = {};

export default SideBarUI;
