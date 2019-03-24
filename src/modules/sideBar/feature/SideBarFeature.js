import React from "react";
import {connect} from "react-redux";
import {MENU_CATEGORY, MENU_CREATE, MENU_LIST, MENU_MEMORY, MENU_TOPIC} from "../../../lib/constants/iconConstants";
import {ROUTE_CATEGORIES, ROUTE_MEMORY, ROUTE_TOPICS} from "../../../lib/constants/RouteConstants";
import {routeAction} from "../../../lib/redux/actions/historyAction";
import {KEY_SHOW_SIDEBAR, KEY_SIDEBAR_SELECTED, KEY_SIDEBAR_SUB_SELECTED} from "../../../lib/constants/keys";
import {extractor} from "../../../lib/utils/util";
import {setData} from "../../../lib/redux/actions/manageData";

const MAIN_ITEM_MEMORY = 'memory';

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
        if (this.props.mainItem) {
            return this.props.setData({
                key: KEY_SIDEBAR_SELECTED,
                value: item.name
            })
        }
        this.props.setData({
            key: KEY_SIDEBAR_SELECTED,
            value: item.name
        });
    }

    /**
     * Sub item click
     */
    siClick = (subItem) => {
        this.props.setData({
            key: KEY_SHOW_SIDEBAR,
            value: false
        });
        this.props.setData({
            key: KEY_SIDEBAR_SUB_SELECTED,
            value: subItem.name
        });
        this.props.routeAction(subItem);
    }

    /**
     * create sub item
     */
    csi = (name, icon, url) => {
        const click = this.siClick;
        const selected = ((this.props.subItem) && (this.props.subItem === name));
        return {name, icon, url, click, selected};
    }

    getSubItems = (name, url) => {
        switch (name) {
            case MAIN_ITEM_MEMORY:
                return [
                    this.csi('create', MENU_CREATE, url+'/create'),
                    this.csi('remember list ', MENU_LIST, url+'/remember'),
                    this.csi('all memories', MENU_LIST, url),
                ]
            default:
                return [
                    this.csi('create', MENU_CREATE, url+'/create'),
                    this.csi('list', MENU_LIST, url)
                ]
        }
    }

    mi = (name, icon, url) => {
        const subItems = this.getSubItems(name, url);
        const show =  ((this.props.mainItem) && this.props.mainItem === name);
        return {name, icon, url, subItems, show}
    }

    getItems = () => {
        return [
            this.mi('categories', MENU_CATEGORY, ROUTE_CATEGORIES),
            this.mi('topics', MENU_TOPIC, ROUTE_TOPICS),
            this.mi(MAIN_ITEM_MEMORY, MENU_MEMORY, ROUTE_MEMORY),
        ]
    }
}

const mapStateToProps = (state) => ({
    mainItem: extractor(state, KEY_SIDEBAR_SELECTED),
    subItem: extractor(state, KEY_SIDEBAR_SUB_SELECTED)
});

export default connect(mapStateToProps, {setData, routeAction})(SideBarFeature);
