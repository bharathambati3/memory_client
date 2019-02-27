import React from 'react';
import { connect } from 'react-redux';
import {MENU_CATEGORY, MENU_MEMORY, MENU_TOPIC} from "../../../lib/constants/iconConstants";
import {ROUTE_CATEGORIES, ROUTE_MEMORY, ROUTE_TOPICS} from "../../../lib/constants/RouteConstants";
import {routeAction} from "../../../lib/redux/actions/historyAction";

class SideBarFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            items: this.getItems(),
            onItemClick: this.onItemClick
        };
    }

    onItemClick = (item) => {
        this.props.routeAction({
            url: item.url,
            feature: `sidebar clicked: ${item.name}`
        })
    }

    getItems = () => {
        return [
            {name: 'categories', icon: MENU_CATEGORY, url: ROUTE_CATEGORIES},
            {name: 'topics', icon: MENU_TOPIC, url: ROUTE_TOPICS},
            {name: 'memory', icon: MENU_MEMORY, url: ROUTE_MEMORY},
        ]
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {routeAction})(SideBarFeature);
