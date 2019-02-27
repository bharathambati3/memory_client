import React from 'react';
import { connect } from 'react-redux';
import {MENU_CATEGORY, MENU_MEMORY, MENU_TOPIC} from "../../../lib/constants/iconConstants";

class SideBarFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            items: [
                {name: 'categories', icon: MENU_CATEGORY},
                {name: 'topics', icon: MENU_TOPIC},
                {name: 'memory', icon: MENU_MEMORY},
            ]
        };
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(SideBarFeature);
