import React from 'react';
import { connect } from 'react-redux';
import {
    MENU_CATEGORY, MENU_CREATE, MENU_DELETE, MENU_LIST, MENU_MEMORY, MENU_TOPIC,
    MENU_UPDATE
} from "../../../lib/constants/iconConstants";
import {ROUTE_CATEGORIES, ROUTE_MEMORY, ROUTE_TOPICS} from "../../../lib/constants/RouteConstants";
import {routeAction} from "../../../lib/redux/actions/historyAction";
import {KEY_SHOW_SIDEBAR, KEY_SIDEBAR_SELECTED} from "../../../lib/constants/keys";
import {extractor} from "../../../lib/utils/util";
import {setData} from "../../../lib/redux/actions/manageData";

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
        this.props.setData({
            key: KEY_SIDEBAR_SELECTED,
            value: item
        });
    }

    /**
     * Sub item click
     */
    siClick = (si) => {
        this.props.setData({
            key: KEY_SHOW_SIDEBAR,
            value: false
        })
        this.props.routeAction(si);
    }

    getSubItems = (name, url) => {
        switch (name) {
            default:
                return [
                    {name: 'create', icon: MENU_CREATE, url: url+'/create', click: this.siClick},
                    {name: 'list', icon: MENU_LIST, url: url+'/list', click: this.siClick},
                    {name: 'update', icon: MENU_UPDATE, url: url+'/update', click: this.siClick},
                    {name: 'delete', icon: MENU_DELETE, url: url+'/delete', click: this.siClick},
                ]
        }
    }

    mi = (name, icon, url) => {
        const subItems = this.getSubItems(name, url);
        const show =  ((this.props.selectedItem) && this.props.selectedItem.name === name);
        return {name, icon, url, subItems, show}
    }

    getItems = () => {
        return [
            this.mi('categories', MENU_CATEGORY, ROUTE_CATEGORIES),
            this.mi('topics', MENU_TOPIC, ROUTE_TOPICS),
            this.mi('memory', MENU_MEMORY, ROUTE_MEMORY),
        ]
    }
}

const mapStateToProps = (state) => ({
    selectedItem: extractor(state, KEY_SIDEBAR_SELECTED)
});

export default connect(mapStateToProps, {setData, routeAction})(SideBarFeature);
